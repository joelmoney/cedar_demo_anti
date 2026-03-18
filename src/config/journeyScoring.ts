export interface SliderSegmentWeights {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
}

export interface SliderJourneyWeights {
  journey1: number;
  journey2: number;
  journey3: number;
  journey4: number;
  journey5: number;
  journey6: number;
}

export interface SliderInfluence {
  weight: number;
  segmentWeights: Record<number, SliderJourneyWeights>;
}

export const sliderScoringConfig: Record<string, SliderInfluence> = {
  sentiment: {
    weight: 7,
    segmentWeights: {
      0: { journey1: 1, journey2: 1, journey3: 1, journey4: 1, journey5: 1, journey6: 1 },
      1: { journey1: 5, journey2: 5, journey3: 5, journey4: 5, journey5: 5, journey6: 5 },
      2: { journey1: 10, journey2: 10, journey3: 10, journey4: 10, journey5: 10, journey6: 10 },
      3: { journey1: 5, journey2: 5, journey3: 5, journey4: 5, journey5: 5, journey6: 5 },
      4: { journey1: 1, journey2: 1, journey3: 1, journey4: 1, journey5: 1, journey6: 1 },
    },
  },
  billSize: {
    weight: 5,
    segmentWeights: {
      0: { journey1: 10, journey2: 10, journey3: 10, journey4: 10, journey5: 10, journey6: 10 },
      1: { journey1: 7, journey2: 7, journey3: 7, journey4: 7, journey5: 7, journey6: 7 },
      2: { journey1: 5, journey2: 5, journey3: 5, journey4: 5, journey5: 5, journey6: 5 },
      3: { journey1: 3, journey2: 3, journey3: 3, journey4: 3, journey5: 3, journey6: 3 },
      4: { journey1: 1, journey2: 1, journey3: 1, journey4: 1, journey5: 1, journey6: 1 },
    },
  },
  paymentBehavior: {
    weight: 1,
    segmentWeights: {
      0: { journey1: 1, journey2: 1, journey3: 1, journey4: 1, journey5: 1, journey6: 1 },
      1: { journey1: 3, journey2: 3, journey3: 3, journey4: 3, journey5: 3, journey6: 3 },
      2: { journey1: 5, journey2: 5, journey3: 5, journey4: 5, journey5: 5, journey6: 5 },
      3: { journey1: 7, journey2: 7, journey3: 7, journey4: 7, journey5: 7, journey6: 7 },
      4: { journey1: 10, journey2: 10, journey3: 10, journey4: 10, journey5: 10, journey6: 10 },
    },
  },
  insurance: {
    weight: 10,
    segmentWeights: {
      0: { journey1: 10, journey2: 10, journey3: 10, journey4: 10, journey5: 10, journey6: 10 },
      1: { journey1: 7, journey2: 7, journey3: 7, journey4: 7, journey5: 7, journey6: 7 },
      2: { journey1: 5, journey2: 5, journey3: 5, journey4: 5, journey5: 5, journey6: 5 },
      3: { journey1: 3, journey2: 3, journey3: 3, journey4: 3, journey5: 3, journey6: 3 },
      4: { journey1: 1, journey2: 1, journey3: 1, journey4: 1, journey5: 1, journey6: 1 },
    },
  },
  digitalLiteracy: {
    weight: 3,
    segmentWeights: {
      0: { journey1: 10, journey2: 10, journey3: 10, journey4: 10, journey5: 10, journey6: 10 },
      1: { journey1: 7, journey2: 7, journey3: 7, journey4: 7, journey5: 7, journey6: 7 },
      2: { journey1: 5, journey2: 5, journey3: 5, journey4: 5, journey5: 5, journey6: 5 },
      3: { journey1: 3, journey2: 3, journey3: 3, journey4: 3, journey5: 3, journey6: 3 },
      4: { journey1: 1, journey2: 1, journey3: 1, journey4: 1, journey5: 1, journey6: 1 },
    },
  },
  income: {
    weight: 13,
    segmentWeights: {
      0: { journey1: 10, journey2: 10, journey3: 10, journey4: 10, journey5: 10, journey6: 10 },
      1: { journey1: 7, journey2: 7, journey3: 7, journey4: 7, journey5: 7, journey6: 7 },
      2: { journey1: 5, journey2: 5, journey3: 5, journey4: 5, journey5: 5, journey6: 5 },
      3: { journey1: 3, journey2: 3, journey3: 3, journey4: 3, journey5: 3, journey6: 3 },
      4: { journey1: 1, journey2: 1, journey3: 1, journey4: 1, journey5: 1, journey6: 1 },
    },
  },
};

export interface JourneyScore {
  journeyId: string;
  score: number;
  breakdown: Record<string, number>;
}

export function calculateJourneyScores(sliderValues: Record<string, number>): JourneyScore[] {
  const journeyScores: Record<string, { score: number; breakdown: Record<string, number> }> = {
    journey1: { score: 0, breakdown: {} },
    journey2: { score: 0, breakdown: {} },
    journey3: { score: 0, breakdown: {} },
    journey4: { score: 0, breakdown: {} },
    journey5: { score: 0, breakdown: {} },
    journey6: { score: 0, breakdown: {} },
  };

  Object.entries(sliderValues).forEach(([sliderId, value]) => {
    const sliderConfig = sliderScoringConfig[sliderId];
    if (!sliderConfig) return;

    const segmentWeights = sliderConfig.segmentWeights[value];
    if (!segmentWeights) return;

    Object.entries(segmentWeights).forEach(([journeyId, weight]) => {
      const weightedScore = weight * sliderConfig.weight;
      journeyScores[journeyId].score += weightedScore;
      journeyScores[journeyId].breakdown[sliderId] = weightedScore;
    });
  });

  return Object.entries(journeyScores).map(([journeyId, data]) => ({
    journeyId,
    score: data.score,
    breakdown: data.breakdown,
  }));
}

interface OverrideRule {
  name: string;
  journeyId: string;
  priority: number;
  conditions: Array<{
    slider: keyof typeof sliderValues;
    values: number[];
  }>;
}

const journeyPriority: Record<string, number> = {
  journey3: 1,
  journey1: 2,
  journey5: 3,
  journey4: 4,
  journey6: 5,
  journey2: 6,
};

export function checkJourneyOverrides(sliderValues: Record<string, number>): { journeyId: string; name: string; matchedRules?: string[] } | null {
  const sentiment = sliderValues.sentiment ?? 2;
  const billSize = sliderValues.billSize ?? 2;
  const paymentBehavior = sliderValues.paymentBehavior ?? 2;
  const insurance = sliderValues.insurance ?? 2;
  const digitalLiteracy = sliderValues.digitalLiteracy ?? 2;
  const income = sliderValues.income ?? 2;

  const rules: OverrideRule[] = [
    {
      name: 'Neutral Sentiment + Low Digital Literacy',
      journeyId: 'journey3',
      priority: journeyPriority.journey3,
      conditions: [
        { slider: 'sentiment', values: [2, 3] },
        { slider: 'digitalLiteracy', values: [0, 1] }
      ]
    },
    {
      name: 'Negative Sentiment + Medium/High Insurance',
      journeyId: 'journey2',
      priority: journeyPriority.journey2,
      conditions: [
        { slider: 'sentiment', values: [0, 1] },
        { slider: 'insurance', values: [2, 3, 4] }
      ]
    },
    {
      name: 'Medium/High Bill + Low Insurance',
      journeyId: 'journey1',
      priority: journeyPriority.journey1,
      conditions: [
        { slider: 'billSize', values: [2, 3, 4] },
        { slider: 'insurance', values: [0, 1] }
      ]
    },
    {
      name: 'Good Payment + Medium/High Income',
      journeyId: 'journey6',
      priority: journeyPriority.journey6,
      conditions: [
        { slider: 'paymentBehavior', values: [2, 3, 4] },
        { slider: 'income', values: [2, 3, 4] }
      ]
    },
    {
      name: 'Medium/High Bill + Low/Medium Income',
      journeyId: 'journey4',
      priority: journeyPriority.journey4,
      conditions: [
        { slider: 'billSize', values: [2, 3, 4] },
        { slider: 'income', values: [0, 1, 2] }
      ]
    },
    {
      name: 'Low Insurance + Low Income',
      journeyId: 'journey5',
      priority: journeyPriority.journey5,
      conditions: [
        { slider: 'insurance', values: [0, 1] },
        { slider: 'income', values: [0, 1] }
      ]
    }
  ];

  const values = {
    sentiment,
    billSize,
    paymentBehavior,
    insurance,
    digitalLiteracy,
    income
  };

  const matchedRules: OverrideRule[] = [];

  for (const rule of rules) {
    const allConditionsMet = rule.conditions.every(condition => {
      const sliderValue = values[condition.slider];
      return condition.values.includes(sliderValue);
    });

    if (allConditionsMet) {
      matchedRules.push(rule);
    }
  }

  if (matchedRules.length === 0) {
    return null;
  }

  matchedRules.sort((a, b) => a.priority - b.priority);

  const selectedRule = matchedRules[0];

  return {
    journeyId: selectedRule.journeyId,
    name: selectedRule.name,
    matchedRules: matchedRules.length > 1 ? matchedRules.map(r => r.name) : undefined
  };
}

export function selectJourneyByScore(sliderValues: Record<string, number>): {
  journeyId: string;
  score: number;
  allScores: JourneyScore[];
  overrideApplied: boolean;
  overrideName?: string;
} {
  const override = checkJourneyOverrides(sliderValues);

  const scores = calculateJourneyScores(sliderValues);

  // Calculate total score from all sliders
  const totalScore = Object.values(sliderValues).reduce((sum, value, index) => {
    const sliderKey = Object.keys(sliderValues)[index];
    const sliderConfig = sliderScoringConfig[sliderKey];
    if (!sliderConfig) return sum;

    const segmentWeights = sliderConfig.segmentWeights[value];
    if (!segmentWeights) return sum;

    // For total score, we take the average weight across all journeys
    const avgWeight = Object.values(segmentWeights).reduce((a, b) => a + b, 0) / 6;
    return sum + (avgWeight * sliderConfig.weight);
  }, 0);

  if (override) {
    return {
      journeyId: override.journeyId,
      score: totalScore,
      allScores: scores,
      overrideApplied: true,
      overrideName: override.name,
    };
  }

  // Determine journey based on score thresholds
  let selectedJourney = 'journey6';
  if (totalScore >= 276) {
    selectedJourney = 'journey3';
  } else if (totalScore >= 251) {
    selectedJourney = 'journey1';
  } else if (totalScore >= 216) {
    selectedJourney = 'journey4';
  } else if (totalScore >= 176) {
    selectedJourney = 'journey5';
  } else if (totalScore >= 121) {
    selectedJourney = 'journey2';
  }

  return {
    journeyId: selectedJourney,
    score: totalScore,
    allScores: scores,
    overrideApplied: false,
  };
}
