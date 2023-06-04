import { FormControl } from '@angular/forms';

export type SignInForm = {
  userName: FormControl<string | null>;
  password: FormControl<string | null>;
};
