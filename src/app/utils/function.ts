import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function hasErrorAndTouched(
    form: FormGroup,
    input: string,
    valiator: string
  ): boolean | undefined {
    return (
      form.get(input)?.hasError(valiator) &&
      (form.get(input)?.touched || form.get(input)?.dirty)
    );
  }
export function checkAge(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let actualDate = new Date();
      let actualYear = actualDate.getFullYear();
      let actualMonth = actualDate.getMonth();
      let actualDay = actualDate.getDate();

      let year: Date = new Date(control.value);
      let userYearBirthdate = year.getFullYear();
      let userMonthBirthdate = year.getMonth();
      let userDayBirthdate = year.getDate();

      if (actualYear - userYearBirthdate === 18) {
        if (actualMonth === userMonthBirthdate) {
          
          if (userDayBirthdate > actualDay) {
            console.log('dd');
            return { notMajor: true };
          }
        }
      } else if (actualYear - userYearBirthdate < 18) {
        return { notMajor: true };
      } else {
        return null;
      }

      return null
    };
  }