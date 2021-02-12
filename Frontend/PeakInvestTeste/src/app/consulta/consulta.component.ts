import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaService } from '../services/consulta.service';


@Component({
    selector: 'app-consulta-component',
    templateUrl: './consulta.component.html',
    providers: [ConsultaService]
})

export class ConsultaComponent {
    consultaForm: FormGroup;

    constructor(fb: FormBuilder, private service: ConsultaService) {

        this.consultaForm = fb.group({
            Id: [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(3)])]
        });

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();

        for (let c in this.consultaForm.controls) {
            console.log(c);
            this.consultaForm.controls[c].markAsTouched();
        }

        if (this.consultaForm.valid) {
            console.log(value);
            this.submit();
        } else {
            alert('Intervalo de Valores inválidos!');
        }
    }

    submit() {
        this.service.ConsultarNome(this.consultaForm.controls["Id"].value)
            .subscribe((data: any) => {
                console.log(data);
                this.sweetalertSuccess(data);
            },
                (err) => {
                    this.sweetalertError(err.error);
                }
            );
    }

    sweetalertError(message: string) {
        alert(message)
    }

    sweetalertSuccess(message: string) {
        alert(message)
    }
}
