import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadExcelComponent } from './download-excel.component';

describe('DownloadExcelComponent', () => {
  let component: DownloadExcelComponent;
  let fixture: ComponentFixture<DownloadExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadExcelComponent]
    });
    fixture = TestBed.createComponent(DownloadExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
