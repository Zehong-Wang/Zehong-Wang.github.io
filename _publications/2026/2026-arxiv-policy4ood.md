---
title:          "Policy4OOD: A Knowledge-Guided World Model for Policy Intervention Simulation against the Opioid Overdose Crisis"
date:           2026-02-12 00:01:00 +0800
selected:       true
type:           preprint
pub:            "arXiv preprint"
pub_date:       "2026"
cover:          /assets/images/covers/2026-arxiv-policy4ood.png
authors:
  - Yijun Ma*
  - <b>Zehong Wang</b>*
  - Weixiang Sun
  - Zheyuan Zhang
  - Kaiwen Shi
  - Nitesh Chawla
  - Yanfang Ye
links:
  Paper: https://arxiv.org/abs/2602.12373
# abstract: >-
#   The opioid epidemic remains one of the most severe public health crises in the United States,
#   yet evaluating policy interventions before implementation is difficult: multiple policies interact
#   within a dynamic system where targeting one risk pathway may inadvertently amplify another. We
#   argue that effective opioid policy evaluation requires three capabilities -- forecasting future
#   outcomes under current policies, counterfactual reasoning about alternative past decisions, and
#   optimization over candidate interventions -- and propose to unify them through world modeling. We
#   introduce Policy4OOD, a knowledge-guided spatio-temporal world model that addresses three core
#   challenges: what policies prescribe, where effects manifest, and when effects unfold. Policy4OOD
#   jointly encodes policy knowledge graphs, state-level spatial dependencies, and socioeconomic time
#   series into a policy-conditioned Transformer that forecasts future opioid outcomes. Once trained,
#   the world model serves as a simulator: forecasting requires only a forward pass, counterfactual
#   analysis substitutes alternative policy encodings in the historical sequence, and policy
#   optimization employs Monte Carlo Tree Search over the learned simulator. To support this framework,
#   we construct a state-level monthly dataset (2019--2024) integrating opioid mortality, socioeconomic
#   indicators, and structured policy encodings. Experiments demonstrate that spatial dependencies and
#   structured policy knowledge significantly improve forecasting accuracy, validating each
#   architectural component and the potential of world modeling for data-driven public health decision
#   support.
---
