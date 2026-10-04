import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

type Capability =
  | 'Carrier Networks'
  | 'Cloud Customer Edge'
  | 'Digital Workplace - CWP'
  | 'Hybrid Cloud - Database'
  | 'Hybrid Cloud - Migration'
  | 'Hybrid Cloud - Operations'
  | 'Network'
  | 'Service Management'
  | 'SRE';

type WorkType =
  | 'Onsite'
  | 'Work from home'
  | 'Leave'
  | 'Other';

@Component({
  selector: 'app-time-in',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './time-in.html',
  styleUrl: './time-in.scss'
})
export class TimeIn {
  submitted = false;
  name = "Alex Santos";
  capabilities: Capability[] = [
    'Carrier Networks',
    'Cloud Customer Edge',
    'Digital Workplace - CWP',
    'Hybrid Cloud - Database',
    'Hybrid Cloud - Migration',
    'Hybrid Cloud - Operations',
    'Network',
    'Service Management',
    'SRE'
  ];

  workTypes: WorkType[] = [
    'Onsite',
    'Work from home',
    'Leave',
    'Other'
  ];

  onsiteLocations = [
    'For Manila Resources - Mandaluyong, Robinsons Cybergate Tower 2',
    'For Cebu Resources - Cyberzone 2, Cebu IT Park',
    'Other'
  ];

  timeInForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.timeInForm = this.formBuilder.group({
      eid: [
        '',
        [
          Validators.required
        ]
      ],

      capability: [
        '',
        [
          Validators.required
        ]
      ],

      workType: [
        '',
        [
          Validators.required
        ]
      ],

      otherWorkType: [
        ''
      ],

      location: [
        ''
      ],

      otherLocation: [
        ''
      ],

      seatNumber: [
        ''
      ],

      officePulse: [
        false
      ],

      workFromHomeTracker: [
        false
      ],

      leaveTracker: [
        false
      ],

      acknowledgment: [
        false,
        [
          Validators.requiredTrue
        ]
      ]
    });
  }

  get workType(): WorkType | null {
    return this.timeInForm.get('workType')?.value as WorkType | null;
  }

  get location(): string | null {
    return this.timeInForm.get('location')?.value as string | null;
  }

  get showOnsiteFields(): boolean {
    return this.workType === 'Onsite';
  }

  get showWorkFromHomeFields(): boolean {
    return this.workType === 'Work from home';
  }

  get showLeaveFields(): boolean {
    return this.workType === 'Leave';
  }

  get showOtherWorkType(): boolean {
    return this.workType === 'Other';
  }

  get showOtherLocation(): boolean {
    return this.showOnsiteFields && this.location === 'Other';
  }

  get showSeatNumber(): boolean {
    return this.showOnsiteFields &&
      this.location !== 'Other' &&
      !!this.location;
  }

  onWorkTypeChange(): void {
    this.clearConditionalFields();

    if (this.workType === 'Onsite') {
      this.timeInForm.get('location')?.setValidators([
        Validators.required
      ]);
    }

    if (this.workType === 'Other') {
      this.timeInForm.get('otherWorkType')?.setValidators([
        Validators.required
      ]);
    }

    this.updateConditionalValidation();
  }

  onLocationChange(): void {
    this.timeInForm.get('otherLocation')?.clearValidators();
    this.timeInForm.get('seatNumber')?.clearValidators();
    this.timeInForm.get('officePulse')?.clearValidators();

    if (this.location === 'Other') {
      this.timeInForm.get('otherLocation')?.setValidators([
        Validators.required
      ]);
    } else if (this.location) {
      this.timeInForm.get('seatNumber')?.setValidators([
        Validators.required
      ]);

      this.timeInForm.get('officePulse')?.setValidators([
        Validators.requiredTrue
      ]);
    }

    this.updateConditionalValidation();
  }

  private clearConditionalFields(): void {
    this.timeInForm.patchValue({
      otherWorkType: '',
      location: '',
      otherLocation: '',
      seatNumber: '',
      officePulse: false,
      workFromHomeTracker: false,
      leaveTracker: false
    });

    this.timeInForm.get('location')?.clearValidators();
    this.timeInForm.get('otherLocation')?.clearValidators();
    this.timeInForm.get('seatNumber')?.clearValidators();
    this.timeInForm.get('officePulse')?.clearValidators();
    this.timeInForm.get('workFromHomeTracker')?.clearValidators();
    this.timeInForm.get('leaveTracker')?.clearValidators();
  }

  private updateConditionalValidation(): void {
    this.timeInForm.get('otherWorkType')?.updateValueAndValidity();
    this.timeInForm.get('location')?.updateValueAndValidity();
    this.timeInForm.get('otherLocation')?.updateValueAndValidity();
    this.timeInForm.get('seatNumber')?.updateValueAndValidity();
    this.timeInForm.get('officePulse')?.updateValueAndValidity();
    this.timeInForm.get('workFromHomeTracker')?.updateValueAndValidity();
    this.timeInForm.get('leaveTracker')?.updateValueAndValidity();
  }

  submitForm(): void {
    this.submitted = true;

    if (this.workType === 'Work from home') {
      this.timeInForm.get('workFromHomeTracker')?.setValidators([
        Validators.requiredTrue
      ]);
    }

    if (this.workType === 'Leave') {
      this.timeInForm.get('leaveTracker')?.setValidators([
        Validators.requiredTrue
      ]);
    }

    this.updateConditionalValidation();

    if (this.timeInForm.invalid) {
      this.timeInForm.markAllAsTouched();
      return;
    }

    console.log(
      'Time In submitted:',
      this.timeInForm.getRawValue()
    );
  }
}