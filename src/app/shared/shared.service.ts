import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
declare var tableau: any;
var viz;
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  domainName: any = "asp-csp-dev-044:7900";
  views: any = "views";
  workBookName: any;
  view: any;
  workbook: any;
  activeSheet: any;
  worksheet: any;
  filterValuesCmm: any;
  activeSheetName: any;
  viewName: any;
  tableauViewId: any;
  constructor(private http: Http) { }

  private values = {};
  private filterValues = new Subject<any>();
  private subMeasureId = new Subject<any>();

  setValue(name, value) {
    this.values[name] = value;
  }

  getValue(name) {
    return this.values[name];
  }

  public observedFilterValues = this.filterValues.asObservable();
  public observedSubMeasureValues = this.subMeasureId.asObservable();

  broadcastFilterValueChange(values: any) {
    this.filterValues.next(values);
  }
  broadcastSubMeasureChange(values: any) {
    this.subMeasureId.next(values);
  }
  getdata(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(map(res => res.json()));
  }
  dashboardWidth;
  dashboardHeight;
  createDashboard(newurl) {
    let that = this;
    let vizDiv = this.tableauViewId;
    let vizURL = newurl;
    let options = {
      width: that.dashboardWidth,
      height: that.dashboardHeight,
      hideToolbar: true,
      hideTabs: true,
      onFirstInteractive: function () {
        that.workbook = viz.getWorkbook();
        that.activeSheet = that.workbook.getActiveSheet();
        that.refreshDashboard();
      }
    };
    viz = new tableau.Viz(vizDiv, vizURL, options);
  };
  refreshDashboard() {
    let that = this;
    let worksheet;
    let worksheets;
    let filterValue = this.filterValuesCmm;
    viz.getWorkbook().activateSheetAsync(this.activeSheetName).then(function (sheet) {
      worksheet = sheet;
      worksheets = worksheet.getWorksheets();
    })
      .then(function () {
        for (var i = 0; i < worksheets.length; i++) {
          //if (worksheets[i].getName() == that.viewName) {
            for (var j = 0; j < filterValue.length; j++) {
              worksheets[i].applyFilterAsync(filterValue[j].label, filterValue[j].value, tableau.FilterUpdateType.REPLACE);
            }
          //}
        }
      }).otherwise(function (err) {
        console.log(err);
      });
  }
}
