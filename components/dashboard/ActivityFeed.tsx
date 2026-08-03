const activities = [
  "رزرو جدید ثبت شد",
  "پرداخت با موفقیت انجام شد",
  "کاربر جدید ثبت نام کرد",
  "سالن جدید اضافه شد",
  "اپراتور بروزرسانی شد",
];

export default function ActivityFeed() {
  return (
    <div className="space-y-4">

      {activities.map((item, index) => (

        <div
          key={index}
          className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
        >

          <div className="h-3 w-3 rounded-full bg-green-400"/>

          <span>{item}</span>

        </div>

      ))}

    </div>
  );
}