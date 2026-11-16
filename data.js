// js/data.js - Raw data, error detection, and data utilities

const RAW_DATA = [
  { id: "A001", date: "2026-11-02", student: "S001", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A002", date: "2026-11-02", student: "S002", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A003", date: "2026-11-02", student: "S003", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "ขาด", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A004", date: "2026-11-02", student: "S004", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "สาย", late: 15, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A005", date: "2026-11-02", student: "S005", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A006", date: "2026-11-02", student: "S006", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A007", date: "2026-11-02", student: "S007", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A008", date: "2026-11-02", student: "S008", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "ลา", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A009", date: "2026-11-02", student: "S009", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A010", date: "2026-11-02", student: "S010", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "ลา", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A011", date: "2026-11-03", student: "S001", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "สาย", late: 5, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A012", date: "2026-11-03", student: "S002", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "ขาด", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A013", date: "2026-11-03", student: "S003", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A014", date: "2026-11-03", student: "S004", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A015", date: "2026-11-03", student: "S005", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A016", date: "2026-11-03", student: "S006", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "ขาด", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A017", date: "2026-11-03", student: "S007", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A018", date: "2026-11-03", student: "S008", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "ลา", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A019", date: "2026-11-03", student: "S009", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "สาย", late: 10, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A020", date: "2026-11-03", student: "S010", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A021", date: "2026-11-04", student: "S001", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "สาย", late: 30, hours: 2, submit: "ส่งแล้ว" },
  { id: "A022", date: "2026-11-04", student: "S002", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "ขาด", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A023", date: "2026-11-04", student: "S003", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "ขาด", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A024", date: "2026-11-04", student: "S004", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A025", date: "2026-11-04", student: "S005", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A026", date: "2026-11-04", student: "S006", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "สาย", late: -10, hours: 2, submit: "ส่งแล้ว" },
  { id: "A027", date: "2026-11-04", student: "S007", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A028", date: "2026-11-04", student: "S008", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "ขาด", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A029", date: "2026-11-04", student: "S009", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A030", date: "2026-11-04", student: "S010", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A031", date: "2026-11-05", student: "S001", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "ขาด", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A032", date: "2026-11-05", student: "S002", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A033", date: "2026-11-05", student: "S003", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A034", date: "2026-11-05", student: "S004", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A035", date: "2026-11-05", student: "S005", room: "ปวช.1/1", subject: "การเขียนโปรแกรม", status: "สาย", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A036", date: "2026-11-05", student: "S006", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A037", date: "2026-11-05", student: "S007", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A038", date: "2026-11-05", student: "S008", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A039", date: "2026-11-05", student: "S009", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "สาย", late: 10, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A040", date: "2026-11-05", student: "S010", room: "ปวช.1/2", subject: "การเขียนโปรแกรม", status: "สาย", late: 20, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A041", date: "2026-11-06", student: "S001", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A042", date: "2026-11-06", student: "S002", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A043", date: "2026-11-06", student: "S003", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "สาย", late: 20, hours: 2, submit: "ส่งแล้ว" },
  { id: "A044", date: "2026-11-06", student: "S004", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 25, submit: "ส่งแล้ว" },
  { id: "A045", date: "2026-11-06", student: "S005", room: "ปวช.1/1", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A046", date: "2026-11-06", student: "S006", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A047", date: "2026-11-06", student: "S007", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A048", date: "2026-11-06", student: "S008", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A049", date: "2026-11-06", student: "S009", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "สาย", late: 30, hours: 2, submit: "ส่งแล้ว" },
  { id: "A050", date: "2026-11-06", student: "S010", room: "ปวช.1/2", subject: "ฐานข้อมูล", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A051", date: "2026-11-09", student: "S001", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A052", date: "2026-11-09", student: "S002", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A052", date: "2026-11-09", student: "S002", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A054", date: "2026-11-09", student: "S004", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "ลา", late: 0, hours: 2, submit: "ยังไม่ส่ง" },
  { id: "A055", date: "2026-11-09", student: "S005", room: "ปวช.1/1", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A056", date: "2026-11-09", student: "S006", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "สาย", late: 30, hours: 2, submit: "ส่งแล้ว" },
  { id: "A057", date: "2026-11-09", student: "S007", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A058", date: "2026-11-09", student: "S008", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A059", date: "2026-11-09", student: "S009", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
  { id: "A060", date: "2026-11-09", student: "S010", room: "ปวช.1/2", subject: "การสร้างเว็บไซต์", status: "มาเรียน", late: 0, hours: 2, submit: "ส่งแล้ว" },
];

// ============================================================
// ERROR DEFINITIONS
// ============================================================
const ERROR_DEFINITIONS = [
  {
    id: "ERR-001",
    recordId: "A052",
    type: "duplicate",
    typeLabel: "รหัสซ้ำ",
    icon: "📋",
    title: "รหัสบันทึก A052 ซ้ำกัน",
    detail: "รหัสบันทึก A052 (นักเรียน S002, วันที่ 2026-11-09, วิชา: การสร้างเว็บไซต์) ปรากฏ 2 ครั้งในฐานข้อมูล",
    fix: "ควรลบรายการที่ซ้ำออก 1 รายการ และตรวจสอบว่ารหัส A053 ที่หายไปอาจเป็นข้อมูลที่ถูกบันทึกซ้ำในรหัส A052 แทน",
    severity: "high",
    affectedField: "id",
    recordIds: ["A052 (ซ้ำ 2 ครั้ง)"]
  },
  {
    id: "ERR-002",
    recordId: "A026",
    type: "negative",
    typeLabel: "ค่าลบ",
    icon: "⚠️",
    title: "นาทีสายเป็นค่าลบ (late = -10)",
    detail: "รายการ A026 (นักเรียน S006, วันที่ 2026-11-04, วิชา: การสร้างเว็บไซต์) มีค่า late = -10 ซึ่งเป็นค่าลบที่ไม่ถูกต้อง จำนวนนาทีที่มาสายไม่สามารถเป็นค่าลบได้",
    fix: "ให้แก้ไขค่า late เป็น 0 (กรณีไม่ได้สาย) หรือค่าที่ถูกต้องตามความเป็นจริง อาจเกิดจากการพิมพ์ผิดหน้า '-' โดยไม่ตั้งใจ",
    severity: "high",
    affectedField: "late",
    recordIds: ["A026"]
  },
  {
    id: "ERR-003",
    recordId: "A044",
    type: "range",
    typeLabel: "ค่าเกินขอบเขต",
    icon: "🔢",
    title: "จำนวนชั่วโมงผิดปกติ (hours = 25)",
    detail: "รายการ A044 (นักเรียน S004, วันที่ 2026-11-06, วิชา: ฐานข้อมูล) มีค่า hours = 25 ซึ่งเกินกว่าขอบเขตปกติ 1-10 ชั่วโมง ค่านี้ผิดปกติอย่างชัดเจน",
    fix: "ให้ตรวจสอบข้อมูลต้นฉบับและแก้ไขเป็น 2 ชั่วโมง (ค่าปกติของวิชาในระบบ) อาจเกิดจากการพิมพ์เลข 2 เป็น 25 โดยไม่ตั้งใจ",
    severity: "high",
    affectedField: "hours",
    recordIds: ["A044"]
  },
  {
    id: "ERR-004",
    recordId: "A035",
    type: "inconsist",
    typeLabel: "ข้อมูลขัดแย้ง",
    icon: "🔍",
    title: "สถานะ 'สาย' แต่นาทีเป็น 0",
    detail: "รายการ A035 (นักเรียน S005, วันที่ 2026-11-05, วิชา: การเขียนโปรแกรม) มีสถานะ 'สาย' แต่ค่า late = 0 นาที ซึ่งขัดแย้งกัน ถ้าสายควรมีนาทีที่สายมากกว่า 0",
    fix: "ให้กลับไปตรวจสอบบันทึกต้นฉบับว่า S005 มาสายกี่นาที แล้วแก้ไขค่า late ให้ถูกต้อง หรือถ้ามาทันอาจต้องเปลี่ยนสถานะเป็น 'มาเรียน'",
    severity: "medium",
    affectedField: "late / status",
    recordIds: ["A035"]
  },
  {
    id: "ERR-005",
    recordId: "A017",
    type: "missing",
    typeLabel: "ข้อมูลต้องตรวจสอบ",
    icon: "📝",
    title: "สถานะส่งงาน A017 ควรตรวจสอบ",
    detail: "รายการ A017 (นักเรียน S007, วันที่ 2026-11-03, วิชา: ฐานข้อมูล) มีสถานะ submit = 'ยังไม่ส่ง' ซึ่งระบบได้ตั้งค่านี้ไว้ตามค่าปริยาย อาจต้องตรวจสอบว่าข้อมูลจริงเป็นอย่างไร",
    fix: "ให้ตรวจสอบกับครูผู้สอนหรือบันทึกต้นฉบับว่า S007 ส่งงานแล้วหรือยัง แล้วอัปเดตสถานะให้ถูกต้อง",
    severity: "low",
    affectedField: "submit",
    recordIds: ["A017"]
  },
  {
    id: "ERR-006",
    recordId: "A053",
    type: "missing",
    typeLabel: "ข้อมูลขาดหาย",
    icon: "❓",
    title: "รหัส A053 ขาดหายไป",
    detail: "ลำดับรหัสบันทึกข้ามจาก A052 ไปยัง A054 โดยไม่มี A053 ซึ่งอาจบ่งชี้ว่ามีรายการถูกลบไปโดยไม่ตั้งใจ หรือนักเรียน S003 (ห้อง ปวช.1/1) ไม่มีข้อมูลเข้าเรียนวันที่ 2026-11-09",
    fix: "ให้ตรวจสอบบันทึกต้นฉบับว่ามีข้อมูลของ S003 วันที่ 2026-11-09 หรือไม่ ถ้ามีให้เพิ่มข้อมูลเข้าระบบ ถ้าไม่มีให้บันทึกว่า 'ขาด'",
    severity: "medium",
    affectedField: "id sequence",
    recordIds: ["A053 (ขาดหาย)"]
  }
];

// ============================================================
// ERROR DETECTION FUNCTIONS
// ============================================================
function detectErrors(data) {
  const errors = {};

  // Check for duplicate IDs
  const idCounts = {};
  data.forEach(r => {
    idCounts[r.id] = (idCounts[r.id] || 0) + 1;
  });
  Object.keys(idCounts).forEach(id => {
    if (idCounts[id] > 1) errors[id] = [...(errors[id] || []), 'duplicate'];
  });

  // Check each record
  data.forEach(r => {
    if (r.late < 0)                              errors[r.id] = [...(errors[r.id] || []), 'negative_late'];
    if (r.hours < 1 || r.hours > 10)            errors[r.id] = [...(errors[r.id] || []), 'invalid_hours'];
    if (r.status === 'สาย' && r.late === 0)     errors[r.id] = [...(errors[r.id] || []), 'inconsistent_late'];
  });

  return errors;
}

// ============================================================
// DATA PROCESSING
// ============================================================
function getCleanData() {
  // De-duplicate: keep first occurrence of each ID
  const seen = new Set();
  return RAW_DATA.filter(r => {
    if (seen.has(r.id)) return false;
    seen.add(r.id);
    return true;
  });
}

function filterData(data, filters = {}) {
  return data.filter(r => {
    if (filters.room    && filters.room    !== 'all' && r.room    !== filters.room)    return false;
    if (filters.subject && filters.subject !== 'all' && r.subject !== filters.subject) return false;
    if (filters.status  && filters.status  !== 'all' && r.status  !== filters.status)  return false;
    if (filters.student && filters.student !== 'all' && r.student !== filters.student) return false;
    if (filters.dateStart && r.date < filters.dateStart) return false;
    if (filters.dateEnd   && r.date > filters.dateEnd)   return false;
    return true;
  });
}

function getKPIs(data) {
  return {
    present: data.filter(r => r.status === 'มาเรียน').length,
    absent:  data.filter(r => r.status === 'ขาด').length,
    late:    data.filter(r => r.status === 'สาย').length,
    leave:   data.filter(r => r.status === 'ลา').length,
    submitted: data.filter(r => r.submit === 'ส่งแล้ว').length,
    notSubmitted: data.filter(r => r.submit === 'ยังไม่ส่ง').length,
    total:   data.length,
  };
}

function getSubjects() {
  return [...new Set(RAW_DATA.map(r => r.subject))];
}

function getRooms() {
  return [...new Set(RAW_DATA.map(r => r.room))];
}

function getDates() {
  return [...new Set(RAW_DATA.map(r => r.date))].sort();
}

function getStudents() {
  return [...new Set(RAW_DATA.map(r => r.student))].sort();
}

// Attendance rate by student (clean data)
function getStudentSummary() {
  const cleanData = getCleanData();
  const students = getStudents();
  return students.map(s => {
    const records = cleanData.filter(r => r.student === s);
    const total = records.length;
    const present = records.filter(r => r.status === 'มาเรียน' || r.status === 'สาย').length;
    const absent  = records.filter(r => r.status === 'ขาด').length;
    const late    = records.filter(r => r.status === 'สาย').length;
    const leave   = records.filter(r => r.status === 'ลา').length;
    const submitted = records.filter(r => r.submit === 'ส่งแล้ว').length;
    const rate = total > 0 ? Math.round((present / total) * 100) : 0;
    const room = records.length > 0 ? records[0].room : '-';
    return { student: s, room, total, present, absent, late, leave, submitted, rate };
  });
}

// Status by subject
function getStatusBySubject(data) {
  const subjects = getSubjects();
  const result = {};
  subjects.forEach(sub => {
    const rows = data.filter(r => r.subject === sub);
    result[sub] = {
      มาเรียน: rows.filter(r => r.status === 'มาเรียน').length,
      ขาด:     rows.filter(r => r.status === 'ขาด').length,
      สาย:     rows.filter(r => r.status === 'สาย').length,
      ลา:      rows.filter(r => r.status === 'ลา').length,
    };
  });
  return result;
}

// Status by date
function getStatusByDate(data) {
  const dates = [...new Set(data.map(r => r.date))].sort();
  const result = {};
  dates.forEach(d => {
    const rows = data.filter(r => r.date === d);
    result[d] = {
      มาเรียน: rows.filter(r => r.status === 'มาเรียน').length,
      ขาด:     rows.filter(r => r.status === 'ขาด').length,
      สาย:     rows.filter(r => r.status === 'สาย').length,
      ลา:      rows.filter(r => r.status === 'ลา').length,
    };
  });
  return result;
}

// Status by room
function getStatusByRoom(data) {
  const rooms = getRooms();
  const result = {};
  rooms.forEach(rm => {
    const rows = data.filter(r => r.room === rm);
    result[rm] = {
      มาเรียน: rows.filter(r => r.status === 'มาเรียน').length,
      ขาด:     rows.filter(r => r.status === 'ขาด').length,
      สาย:     rows.filter(r => r.status === 'สาย').length,
      ลา:      rows.filter(r => r.status === 'ลา').length,
    };
  });
  return result;
}

// Submit by subject
function getSubmitBySubject(data) {
  const subjects = getSubjects();
  return {
    labels: subjects,
    submitted:    subjects.map(s => data.filter(r => r.subject === s && r.submit === 'ส่งแล้ว').length),
    notSubmitted: subjects.map(s => data.filter(r => r.subject === s && r.submit === 'ยังไม่ส่ง').length),
  };
}
