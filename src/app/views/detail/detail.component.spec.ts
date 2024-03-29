import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { ProductDetailState } from '@store/product-detail/product-detail.state';
import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
	let component: DetailComponent;
	let fixture: ComponentFixture<DetailComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DetailComponent, NgxsModule.forRoot([ProductDetailState]), HttpClientTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(DetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
