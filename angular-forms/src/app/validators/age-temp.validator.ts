import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


//Custom- validator for template driven form
@Directive({
    selector: '[ageTempValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AgeTempValidator,
        multi: true
    }]
})
export class AgeTempValidator implements Validator {

    //logic for validation
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (control.value < 18) {
            return { age: true };
        }
        return null;
    }


}