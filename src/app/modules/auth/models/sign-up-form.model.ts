import { FormControl } from '@angular/forms';

export type SignUpForm = {
  userName: FormControl<string | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  password: FormControl<string | null>;
};
