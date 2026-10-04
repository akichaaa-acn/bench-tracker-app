// =====================================================
// Attendance
// =====================================================

import { Component } from '@angular/core';

type AttendanceStatus =
  | 'Present'
  | 'On Leave'
  | 'Absent';

interface AttendanceRecord {
  name: string;
  timeIn: string;
  timeOut: string;
  status: AttendanceStatus;
  absenceDays: number;
}

@Component({
  selector: 'app-attendance',
  standalone: true,
  templateUrl: './attendance.html',
  styleUrl: './attendance.scss'
})
export class Attendance {
  attendanceRecords: AttendanceRecord[] = [
    {
      name: 'Alex Santos',
      timeIn: '08:42 AM',
      timeOut: '05:31 PM',
      status: 'Present',
      absenceDays: 0
    },
    {
      name: 'Maria Cruz',
      timeIn: '08:55 AM',
      timeOut: '05:18 PM',
      status: 'Present',
      absenceDays: 0
    },
    {
      name: 'John Reyes',
      timeIn: '',
      timeOut: '',
      status: 'Absent',
      absenceDays: 1
    },
    {
      name: 'Sarah Garcia',
      timeIn: 'On Leave',
      timeOut: '',
      status: 'On Leave',
      absenceDays: 0
    },
    {
      name: 'Michael Tan',
      timeIn: '08:37 AM',
      timeOut: '05:42 PM',
      status: 'Present',
      absenceDays: 0
    },
    {
      name: 'Nicole Lim',
      timeIn: 'On Leave',
      timeOut: '',
      status: 'On Leave',
      absenceDays: 0
    },
    {
      name: 'Daniel Ramos',
      timeIn: '',
      timeOut: '',
      status: 'Absent',
      absenceDays: 3
    },
    {
      name: 'Karen Flores',
      timeIn: '09:02 AM',
      timeOut: '05:27 PM',
      status: 'Present',
      absenceDays: 0
    }
  ];

  get unapprovedAbsences(): AttendanceRecord[] {
    return this.attendanceRecords.filter(
      record => record.status === 'Absent'
    );
  }

  get criticalAbsences(): AttendanceRecord[] {
    return this.unapprovedAbsences.filter(
      record => record.absenceDays >= 3
    );
  }

  get presentToday(): number {
    return this.attendanceRecords.filter(
      record => record.status === 'Present'
    ).length;
  }

  get onLeaveToday(): number {
    return this.attendanceRecords.filter(
      record => record.status === 'On Leave'
    ).length;
  }

  get absentToday(): number {
    return this.attendanceRecords.filter(
      record => record.status === 'Absent'
    ).length;
  }

  getHoursWorked(record: AttendanceRecord): string {
    if (
      record.status !== 'Present' ||
      !record.timeIn ||
      !record.timeOut
    ) {
      return '';
    }

    const timeIn = this.parseTime(record.timeIn);
    const timeOut = this.parseTime(record.timeOut);

    if (timeIn === null || timeOut === null) {
      return '';
    }

    let difference = timeOut - timeIn;

    if (difference < 0) {
      difference += 24 * 60;
    }

    const hours = Math.floor(difference / 60);
    const minutes = difference % 60;

    return `${hours}h ${minutes}m`;
  }

  private parseTime(time: string): number | null {
    const match = time.match(
      /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i
    );

    if (!match) {
      return null;
    }

    let hours = Number(match[1]);
    const minutes = Number(match[2]);
    const period = match[3].toUpperCase();

    if (period === 'AM' && hours === 12) {
      hours = 0;
    }

    if (period === 'PM' && hours !== 12) {
      hours += 12;
    }

    return (hours * 60) + minutes;
  }
}