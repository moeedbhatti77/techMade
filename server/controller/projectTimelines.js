import data from "../models/data.json" assert { type: "json" };

export function getData(req, res) {
    try {
        return res.json(data)
    } catch (error) {
        return res.status(500).send("Internat Server Error")
    }
}