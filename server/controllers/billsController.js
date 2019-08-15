module.exports = {
  async getUserBills(req, res) {
    let { user_id } = req.session.user;
    const db = req.app.get("db");
    let bills = await db.get_user_bills(+user_id);
    res.send(bills);
  },

  async editBill(req, res) {
    let { bill_id } = req.params;
    let { newBill, newAmount } = req.body;
    const db = req.app.get("db");
    let bills = await db.edit_bill([+bill_id, newBill, newAmount]);
    console.log(newBill, newAmount);
    res.send(bills);
  },

  async deleteBill(req, res) {
    let { bill_id } = req.params;
    let { user_id } = req.session.user;
    const db = req.app.get("db");
    let bills = await db.delete_bill([+bill_id, +user_id]);
    res.send(bills);
  },

  async addBill(req, res) {
    let { user_id } = req.session.user;
    let { billname, billamount } = req.body;
    const db = req.app.get("db");
    let bills = await db.add_bill([+user_id, billname, billamount]);
    res.send(bills);
  }
};
