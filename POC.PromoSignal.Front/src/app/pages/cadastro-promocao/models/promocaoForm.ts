import { FormControl } from "@angular/forms";

export interface PromocaoForm {
    empresa: FormControl<string | null>;
    chamada: FormControl<string | null>;
    regras: FormControl<string | null>;
    enderecoUrl: FormControl<string | null>;
}