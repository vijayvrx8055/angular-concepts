import { AbstractControl, ValidationErrors } from "@angular/forms";


export class AgeValidator {

    static validateAge(control: AbstractControl): ValidationErrors | null {
        let value = control.value;

        if (value < 18) {
            // age: a boolean which will be mentioned in the HTML file while validation / it has some value or not (age:'a')
            // requiredValue: just indicates the expected value
            return { age: true, requiredValue: '>18' };
        }

        return null;
    }

    static nullCheck(control: AbstractControl): ValidationErrors | null {
        let value = control.value;

        //add error condition for null check
        if (isNaN(value) || value == '' || value == null) {
            return { isNull: true };
        }
        return null;
    }
}

