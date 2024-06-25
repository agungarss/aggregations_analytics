db.getCollection('accounts').aggregate(
  [
    { $sort: { date: -1 } },
    {
      $group: {
        _id: '$account_id',
        latestTransaction: { $first: '$$ROOT' }
      }
    }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);
