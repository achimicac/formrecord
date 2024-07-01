import {db} from "../database/db-config"

export const addRecord = async (req, res) => {
      const { ...data } = req.body;
      const sql = ` INSERT INTO table `;

      db.query(sql, data, async (err, alreadyadd) => {
            if (err) {
                  throw err;
            }
            return res.json("add data success")
      })

      return res.json("hello from first page")
}