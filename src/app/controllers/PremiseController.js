import Premise from '../models/Premise';
import Station from '../models/Station';

class PremiseController {
  async store(req, res) {
    const premiseExists = await Premise.findOne({
      where: { name: req.body.name }
    });

    if (premiseExists) {
      return res.status(400).json({ error: 'Premise already exists' });
    }

    const { id, name, adress } = await Premise.create(req.body);

    return res.json({
      id,
      name,
      adress
    });
  }

  async all(req, res) {
    const entries = await Premise.findAll();

    return res.json({
      entries: entries.map(item => {
        const { id, name, adress } = item;
        return {
          id,
          name,
          adress
        };
      })
    });
  }

  async getStations(req, res) {
    if (isNaN(req.params.premise_id)) {
      return res.status(400).json({ error: 'Url param is not a number' });
    }

    const stations = await Station.findAll({
      where: { premise_id: req.params.premise_id }
    });

    if (!stations) {
      return res.status(400).json({ error: 'Stations not found' });
    }

    const entries = stations.map(station => {
      const { serial, premise_id, name } = station;
      return {
        serial,
        premise_id,
        name
      };
    });

    return res.json({
      entries
    });
  }
}

export default new PremiseController();
