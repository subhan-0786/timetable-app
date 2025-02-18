import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Timetable = () => {
  const schedule = [
    { day: 'Monday', slots: ['', 'CC', '', 'MLBio', 'FML', 'PDP'] },
    { day: 'Tuesday', slots: ['', 'PDP', '', 'IAD', '', ''] },
    { day: 'Wednesday', slots: ['FML', 'CC', 'MLBio', 'IAD', 'IAD', 'IAD'] },
    { day: 'Thursday', slots: ['', 'CC', 'E.Eco', 'E.Eco', 'FML', 'IAD'] },
    { day: 'Friday', slots: ['MLBio', 'E.Eco', '', '', 'PDP', ''] }
  ];

  const timeSlots = [
    '08:25-9:20',
    '09:30-10:25',
    '10:35-11:30',
    '11:40-12:35',
    '13:30-14:25',
    '14:35-15:30'
  ];

  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      'CC': 'bg-blue-300/50 text-blue-900',
      'MLBio': 'bg-green-300/50 text-green-900',
      'FML': 'bg-pink-300/50 text-pink-900',
      'PDP': 'bg-orange-300/50 text-orange-900',
      'IAD': 'bg-indigo-300/50 text-indigo-900',
      'E.Eco': 'bg-red-300/50 text-red-900',
    };
    
    return colors[subject] || 'bg-gray-50';
  };
  

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <Card className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-white/30">
        <CardHeader className="text-center bg-gradient-to-r from-teal-700 to-emerald-700 text-white rounded-t-3xl p-6 shadow-md">
          <CardTitle className="text-3xl font-bold drop-shadow-md">
            Pakistan Institute of Engineering & Applied Sciences
          </CardTitle>
          <p className="text-gray-100 text-lg">Department of Computer and Information Sciences</p>
          <h2 className="text-2xl font-semibold mt-2">Timetable - (BSCIS) – SPRING 2025</h2>
          <p className="text-md text-gray-100 mt-1">
            6th Semester BS (CIS) Session 2022-2026 (27th Jan. 2025 to 23rd May. 2025)
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200/50">
            <table className="w-full border-collapse bg-white/30 backdrop-blur-md">
              <thead>
                <tr className="bg-gradient-to-r from-gray-200/50 to-gray-300/50">
                  <th className="border p-4 text-gray-800 font-bold">Day/Time</th>
                  {timeSlots.map((time, index) => (
                    <th key={index} className="border p-4 text-gray-800 text-md font-bold">
                      {time}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((day, index) => (
                  <tr key={index} className="hover:bg-gray-300/30">
                    <td className="border p-4 font-medium bg-gray-200/50 text-gray-800 text-lg">
                      {day.day}
                    </td>
                    {day.slots.map((slot, slotIndex) => (
                      <td
                        key={slotIndex}
                        className={`border p-4 text-center font-semibold text-lg rounded-md shadow-md ${getSubjectColor(slot)}`}
                      >
                        {slot}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-gray-200/40 backdrop-blur-md rounded-2xl shadow-inner border border-gray-300/50">
            <p className="text-gray-800 font-semibold text-lg">Venue Lectures: C-Asterisk</p>
            <p className="text-gray-800 font-semibold text-lg">IAD Lab: B-106</p>
          </div>
          <div className="mt-8 text-center text-gray-700 border-t border-gray-300 pt-6 font-semibold text-lg">
            Issued by: Undergraduate Studies Office
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timetable;
