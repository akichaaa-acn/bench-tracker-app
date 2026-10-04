import { Component } from '@angular/core';

type AttendanceStatus =
  | 'Present'
  | 'Sick Leave'
  | 'Vacation Leave'
  | 'Unapproved Absence';

interface Resource {
  name: string;
  careerLevel: string;
  capability: string;
  skills: string[];
  attendanceStatus: AttendanceStatus;
  absenceDays: number;
  readyForDeployment: boolean;
}

interface SkillDistribution {
  name: string;
  count: number;
}

interface CareerLevel {
  level: string;
  count: number;
}

interface CapabilityDistribution {
  name: string;
  count: number;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  templateUrl: './resources.html',
  styleUrl: './resources.scss'
})
export class Resources {
  totalEmployees = 86;
  presentToday = 79;
  readyForDeployment = 31;

  skillDistribution: SkillDistribution[] = [
    {
      name: 'Azure',
      count: 68
    },
    {
      name: 'Java',
      count: 54
    },
    {
      name: 'SAP',
      count: 46
    },
    {
      name: 'Data',
      count: 58
    },
    {
      name: 'SRE',
      count: 42
    },
    {
      name: 'UiPath',
      count: 36
    }
  ];

  careerLevels: CareerLevel[] = [
    {
      level: 'CL9',
      count: 8
    },
    {
      level: 'CL10',
      count: 16
    },
    {
      level: 'CL11',
      count: 28
    },
    {
      level: 'CL12',
      count: 34
    }
  ];

  capabilityDistribution: CapabilityDistribution[] = [
    {
      name: 'Cloud First',
      count: 29
    },
    {
      name: 'Security',
      count: 18
    },
    {
      name: 'Enterprise Platforms',
      count: 16
    },
    {
      name: 'Data & AI',
      count: 14
    },
    {
      name: 'Software Engineering',
      count: 9
    }
  ];

  resources: Resource[] = [
    {
      name: 'Alex Santos',
      careerLevel: 'CL8',
      capability: 'SRE / Hybrid Cloud',
      skills: [
        'AWS',
        'Azure',
        'Kubernetes',
        'Terraform'
      ],
      attendanceStatus: 'Present',
      absenceDays: 0,
      readyForDeployment: false
    },
    {
      name: 'Maria Cruz',
      careerLevel: 'CL7',
      capability: 'Cloud Customer Edge',
      skills: [
        'Azure',
        'Networking',
        'Terraform'
      ],
      attendanceStatus: 'Present',
      absenceDays: 0,
      readyForDeployment: true
    },
    {
      name: 'John Reyes',
      careerLevel: 'CL6',
      capability: 'Network',
      skills: [
        'Routing',
        'Switching',
        'Cisco'
      ],
      attendanceStatus: 'Unapproved Absence',
      absenceDays: 1,
      readyForDeployment: false
    },
    {
      name: 'Sarah Garcia',
      careerLevel: 'CL9',
      capability: 'Hybrid Cloud - Operations',
      skills: [
        'AWS',
        'Linux',
        'Kubernetes',
        'Docker'
      ],
      attendanceStatus: 'Unapproved Absence',
      absenceDays: 3,
      readyForDeployment: false
    },
    {
      name: 'Michael Tan',
      careerLevel: 'CL8',
      capability: 'Hybrid Cloud - Migration',
      skills: [
        'Azure',
        'Migration',
        'Terraform'
      ],
      attendanceStatus: 'Present',
      absenceDays: 0,
      readyForDeployment: true
    },
    {
      name: 'Nicole Lim',
      careerLevel: 'CL5',
      capability: 'Service Management',
      skills: [
        'ITIL',
        'ServiceNow',
        'Incident Management'
      ],
      attendanceStatus: 'Vacation Leave',
      absenceDays: 0,
      readyForDeployment: false
    }
  ];

  get unapprovedAbsences(): Resource[] {
    return this.resources.filter(
      resource =>
        resource.attendanceStatus === 'Unapproved Absence'
    );
  }

  get criticalAbsences(): Resource[] {
    return this.unapprovedAbsences.filter(
      resource => resource.absenceDays >= 3
    );
  }

  get attendancePercentage(): number {
    if (!this.totalEmployees) {
      return 0;
    }

    return Math.round(
      (this.presentToday / this.totalEmployees) * 100
    );
  }

  get deploymentPercentage(): number {
    if (!this.totalEmployees) {
      return 0;
    }

    return Math.round(
      (this.readyForDeployment / this.totalEmployees) * 100
    );
  }

  getSkillHeight(count: number): number {
    const max = 70;

    return (count / max) * 100;
  }

  getCapabilityWidth(count: number): number {
    const max = 30;

    return (count / max) * 100;
  }

  getCareerDashOffset(index: number): number {
    const circumference = 251.2;
    const values = this.careerLevels;

    let previous = 0;

    for (let i = 0; i < index; i++) {
      previous += values[i].count;
    }

    return circumference - (
      (previous / this.totalEmployees) * circumference
    );
  }

  getCareerDashLength(count: number): number {
    const circumference = 251.2;

    return (
      (count / this.totalEmployees) * circumference
    );
  }

  assignTask(resource: Resource): void {
    console.log(
      'Assign task to:',
      resource.name
    );
  }

  setReadyForDeployment(resource: Resource): void {
    resource.readyForDeployment = true;
  }
}