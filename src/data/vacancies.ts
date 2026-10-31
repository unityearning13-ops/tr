import { Vacancy } from '../types';

export const teamTrainerRules = {
  daily: {
    titleEn: 'Section A: Daily Activities (দৈনন্দিন কার্যক্রম)',
    titleBn: 'সেকশন এ: দৈনন্দিন কার্যক্রম',
    items: [
      {
        id: 1,
        textBn: 'প্রতিদিন সকাল ৯:৩০ টায় গ্রুপে মিটিং লিংক শেয়ার করতে হবে এবং সকাল ১০:১০ মিনিট পর্যন্ত মেম্বারদের মিটিং পরিচালনা করতে হবে।',
        textEn: 'Share meeting link in the group daily at 9:30 AM and conduct member meetings until 10:10 AM.',
      },
      {
        id: 2,
        textBn: 'সকল কাউন্সেলিং মিটিংয়ে নিয়মিত লিড পাঠাতে হবে এবং ডেমো দিতে হবে।',
        textEn: 'Regularly send leads and provide demos in all counseling meetings.',
      },
      {
        id: 3,
        textBn: 'প্রতিদিন রাত ৯:০০ টায় গ্রুপে মিটিং লিংক শেয়ার করতে হবে এবং রাত ৯:৫০ মিনিট পর্যন্ত মিটিং পরিচালনা করতে হবে।',
        textEn: 'Share meeting link in the group daily at 9:00 PM and conduct meetings until 9:50 PM.',
      },
      {
        id: 4,
        textBn: 'রাত ১০:৩০ টায় STL Meeting অথবা Chief Meeting-এ অংশগ্রহণ করতে হবে এবং কমপক্ষে ৩০ মিনিট সক্রিয় থাকতে হবে।',
        textEn: 'Participate in the STL Meeting or Chief Meeting at 10:30 PM and remain active for at least 30 minutes.',
      },
      {
        id: 5,
        textBn: 'প্রতিদিন নিয়মিত সক্রিয় থাকতে হবে এবং মেম্বারদের কনভার্ট অর্জনে কাজ করতে হবে।',
        textEn: 'Stay regularly active every day and work towards member conversion goals.',
      },
      {
        id: 6,
        textBn: 'টানা ৩ দিন কোনো কনভার্ট না হলে কোম্পানির নীতিমালা অনুযায়ী ট্রেইনার আইডি বাতিলের সিদ্ধান্ত নেওয়া হতে পারে।',
        textEn: 'If there are no conversions for 3 consecutive days, a decision to cancel the trainer ID may be taken according to company policy.',
      },
      {
        id: 7,
        textBn: 'প্রতিদিন কমপক্ষে ২টি কনভার্ট অর্জন করতে হবে।',
        textEn: 'Must achieve a minimum of 2 conversions daily.',
      },
      {
        id: 8,
        textBn: 'গ্রুপে নিয়মিত নোটিশ দিতে হবে এবং গ্রুপের কার্যক্রম সচল রাখতে হবে।',
        textEn: 'Provide regular notices in the group and keep group activities active.',
      },
      {
        id: 9,
        textBn: 'মেম্বারদের সঙ্গে সদাচরণ বজায় রাখতে হবে এবং পেশাদার আচরণ করতে হবে।',
        textEn: 'Maintain cordiality with members and exhibit professional behavior.',
      },
      {
        id: 10,
        textBn: 'প্রতিদিন নিজের পার্সোনাল লিড ও কনভার্ট থাকতে হবে।',
        textEn: 'Must maintain personal leads and conversions every day.',
      },
      {
        id: 11,
        textBn: 'টিম ট্রেইনার অ্যাকাউন্ট নেওয়ার পর প্রথম তিন মাসের মধ্যে কাজ ছেড়ে দিলে ২০০০ টাকা জরিমানা হবে।',
        textEn: 'If a Team Trainer leaves work within the first 3 months, a penalty of 2,000 BDT will apply.',
      },
      {
        id: 12,
        textBn: 'Trainer আইডি নেওয়ার পর স্টুডেন্ট অ্যাকাউন্টে ১,০০০ টাকা ব্যালেন্স রাখতে হবে। অতিরিক্ত ব্যালেন্স উত্তোলন করা যাবে। নির্ধারিত ৩ মাসের আগে ওই ১,০০০ টাকা উত্তোলন করা যাবে না।',
        textEn: 'Must maintain 1,000 BDT balance in student account.',
      },
      {
        id: 13,
        textBn: 'মাসের মাঝখানে কাজ ছেড়ে দিলে ওই মাসে কোনো প্রকার পেমেন্ট প্রদান করা হবে না।',
        textEn: 'If someone leaves work in the middle of the month, no payment will be provided for that month.',
      },
      {
        id: 14,
        textBn: 'কোম্পানির নির্ধারিত দায়িত্ব, নিয়মাবলি এবং পেশাগত আচরণবিধি অনুসরণ করতে হবে।',
        textEn: 'Must follow prescribed duties and code of conduct.',
      },
    ],
  },
};

export const vacancies: Vacancy[] = [
  {
    id: 'team-trainer',
    title: 'টিম ট্রেইনার (Team Trainer)',
    category: 'লিডারশিপ ও ট্রেনিং',
    descriptionEn: 'Official Team Trainer position responsible for leading team training sessions, daily virtual meetings, and member conversions.',
    descriptionBn: 'টিম ট্রেনিং সেশন পরিচালনা, প্রতিদিনের ভার্চুয়াল মিটিং এবং মেম্বার কনভার্ট অর্জনে নেতৃত্বদানকারী টিম ট্রেইনার পদ।',
    hasDetailedRules: true,
    sections: {
      daily: teamTrainerRules.daily,
    },
  },
  {
    id: 'trainer',
    title: 'ট্রেইনার (Trainer)',
    category: 'শিক্ষা ও মেন্টরিং',
    descriptionEn: 'Trainer position.',
    descriptionBn: 'ট্রেইনার পদ।',
    hasDetailedRules: false,
  },
  {
    id: 'counsellor',
    title: 'কাউন্সেলর (Counsellor)',
    category: 'পরামর্শ ও সহায়তা',
    descriptionEn: 'Counsellor position.',
    descriptionBn: 'কাউন্সেলর পদ।',
    hasDetailedRules: false,
  },
  {
    id: 'teacher',
    title: 'শিক্ষক (Teacher)',
    category: 'শিক্ষা ও পাঠদান',
    descriptionEn: 'Teacher position.',
    descriptionBn: 'শিক্ষক পদ।',
    hasDetailedRules: false,
  },
  {
    id: 'sub-admin',
    title: 'সাব-অ্যাডমিন (Sub Admin)',
    category: 'অ্যাডমিন ও অপারেশন',
    descriptionEn: 'Sub Admin position.',
    descriptionBn: 'সাব-অ্যাডমিন পদ।',
    hasDetailedRules: false,
  },
];
