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

@Component({
  selector: 'app-time-out',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './time-out.html',
  styleUrl: './time-out.scss'
})
export class TimeOut {
  submitted = false;

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

  taskOptions = [
    'Mandatory Training',
    'Agentic Garage Session',
    'Bench Task Assignment',
    'Other Trainings for Upskilling/Cross-skilling',
    'MAGS and IIS Additional Trainings',
    'Attended Interview'
  ];

  timeOutForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.timeOutForm = this.formBuilder.group({
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

      reportingDate: [
        '',
        [
          Validators.required
        ]
      ],

      tasksAccomplished: this.formBuilder.group({
        mandatoryTraining: [
          false
        ],

        agenticGarage: [
          false
        ],

        benchTaskAssignment: [
          false
        ],

        upskillingTraining: [
          false
        ],

        magsIisTraining: [
          false
        ],

        attendedInterview: [
          false
        ]
      }),

      remarks: [
        ''
      ],

      hoursSpent: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(24)
        ]
      ],

      helpNeeded: [
        ''
      ]
    });
  }

  submitForm(): void {
    this.submitted = true;

    if (this.timeOutForm.invalid) {
      this.timeOutForm.markAllAsTouched();
      return;
    }

    console.log(
      'Time Out submitted:',
      this.timeOutForm.getRawValue()
    );
  }
}