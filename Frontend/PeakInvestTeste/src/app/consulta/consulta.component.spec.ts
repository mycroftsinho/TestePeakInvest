import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaComponent } from './consulta.component';

describe('ConsultaComponent', () => {
    let component: ConsultaComponent;
    let fixture: ComponentFixture<ConsultaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConsultaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConsultaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Counter');
    }));

    it('should start with count 0, then increments by 1 when clicked', async(() => {
        const countElement = fixture.nativeElement.querySelector('strong');
        expect(countElement.textContent).toEqual('0');

        const incrementButton = fixture.nativeElement.querySelector('button');
        incrementButton.click();
        fixture.detectChanges();
        expect(countElement.textContent).toEqual('1');
    }));
});
