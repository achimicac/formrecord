export const csvAdding = async (req, res) => {
      const { date, prop } = req.body;
      console.log(date + "  and  " + prop)
      return res.json("hello from first page")
}