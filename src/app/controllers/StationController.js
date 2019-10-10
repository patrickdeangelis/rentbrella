import Station from '../models/Station';
import Premise from '../models/Premise';

class StationController {
  async store(req, res) {
    const stationExists = await Station.findOne({
      where: { serial: req.body.serial, premise_id: req.body.premise_id }
    });

    if (stationExists) {
      return res.status(400).json({ error: 'Station already exists' });
    }

    const premiseExists = await Premise.findOne({
      where: { id: req.body.premise_id }
    });

    if (!premiseExists) {
      return res.status(400).json({ error: 'Premise not exists' });
    }

    try {
      const { serial, premise_id, name } = await Station.create(req.body).then(
        station => {
          station.setPremise(premiseExists);
          return station.save();
        }
      );

      return res.json({
        serial,
        premise_id,
        name
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new StationController();
