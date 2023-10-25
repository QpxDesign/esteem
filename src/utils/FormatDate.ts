export default function FormatDate(s : any) {
  const daysOfWeeksNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const d = new Date(s)
  return `${d.getHours()}:00 ${daysOfWeeksNames[d.getDay()]}`

}
