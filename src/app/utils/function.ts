import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Product } from "../shared/models/product";
import { ErrorResponse, LikeOrDislikeResponse, NotModifiedResponse } from "../shared/interfaces/response.interface";
import { Subject } from "rxjs";
import { User, UserResponse } from "../shared/models/user";

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

export function checkIsLikedOrDisliked(actualArray: Product[], attribut: keyof Product, response: LikeOrDislikeResponse , message: string): Product[] | null {
  console.log(response);
  
  if (response.message === message) {
    return null
  } else {
   return actualArray.filter(p => {
    if (p.id === response.product.id) {
      if (attribut === "like" || attribut === "dislike") {
        p[attribut] = response.product[attribut];
      }
    }
    })

  }

}

export function setUser(response: UserResponse, userName: Subject<string | null>, fullUser: Subject<UserResponse | null> ): UserResponse{
  localStorage.setItem('name', response.user.name);
  userName.next(response.user.name);
  fullUser.next(response);
  return response;
}