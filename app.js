// 同房同日且時段有任何重疊即視為衝突（首尾相接不算）
// 以一般 script 載入；執行時依賴 index.html 內的全域 bookings 與 toMinutes
function findOverlap(room, date, start, end) {
  const s = toMinutes(start);
  const e = toMinutes(end);
  return bookings.find(b =>
    b.room === room && b.date === date &&
    s < toMinutes(b.end) && toMinutes(b.start) < e
  );
}
