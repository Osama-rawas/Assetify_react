export default function Logout() {
  return (
    <div className="logout-container">
      <div className="background-image"></div>
      <div className="confirmation-box">
        <p>هل انت متأكد من تسجيل الخروج؟</p>
        <button className="btn btn-primary">تأكيد</button>
        <button className="btn btn-secondary">تراجع</button>
      </div>
    </div>
  );
}
