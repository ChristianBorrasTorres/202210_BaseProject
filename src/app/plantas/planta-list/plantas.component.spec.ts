/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';
import { PlantaListComponent } from './planta-list.component';

describe('PlantasComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [ PlantaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    component.plantas = [
      new Planta(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
      ),
      new Planta(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
      ),
      new Planta(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Crea una tabla de cuatro filas que integran el encabezado y las tres plantas', () => {
    const tr = debug.queryAll(By.css('tr'));
    expect(tr.length).toBe(4);
  });

  it('Crea un encabezado', () => {
    const thead = debug.queryAll(By.css('thead'));
    expect(thead.length).toBe(1);
  });

});
