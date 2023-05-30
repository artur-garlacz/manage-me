import { FormControl } from '@angular/forms';

export type ProjectForm = {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
};
