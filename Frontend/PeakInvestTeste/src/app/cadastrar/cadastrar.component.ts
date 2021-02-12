import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Cadastro } from '../models/cadastro.model';


@Component({
    selector: 'app-cadastrar-component',
    templateUrl: './cadastrar.component.html',
    providers: [CadastroService]
})

export class CadastrarComponent {
    cadastroForm: FormGroup;

    constructor(fb: FormBuilder, private service: CadastroService) {

        this.cadastroForm = fb.group({
            Parcela: [null, Validators.compose([Validators.required, Validators.min(1)])],
            Valor: [null, Validators.compose([Validators.required, Validators.min(1)])]
        });

    }

    submitForm($ev, value: any) {
        $ev.preventDefault();

        for (let c in this.cadastroForm.controls) {
            console.log(c);
            this.cadastroForm.controls[c].markAsTouched();
        }

        if (this.cadastroForm.valid) {
            console.log(value);
            this.submit();
        } else {
            alert('Formulário inválido!');
        }
    }

    submit() {
        this.service.CalcularValor(this.cadastroForm.value)
            .subscribe((data: string) => {
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
