import { FormControl } from '@angular/forms';

export type FunctionalityForm = {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  priority: FormControl<string | null>;
  userId: FormControl<string | null>;
};
