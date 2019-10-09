import Premise from '../models/Premise';

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
}

export default new PremiseController();
