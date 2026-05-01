---
title:          "LatentChem: From Textual CoT to Latent Thinking in Chemical Reasoning"
date:           2026-05-01 00:01:00 +0800
selected:       false
pub:            "International Conference on Machine Learning (ICML)"
pub_date:       "2026"
cover:          /assets/images/covers/2026-arxiv-latentchem.png
authors:
  - Xinwu Ye
  - Yicheng Mao
  - Jia Zhang
  - Yimeng Liu
  - Li Hao
  - Fang Wu
  - Zhiwei Li
  - Yuxuan Liao
  - <b>Zehong Wang</b>
  - Zhiyuan Liu
  - Zhenfei Yin
  - Li Yuan
  - Philip Torr
  - Huan Sun
  - Xiangxiang Zeng
  - Mengdi Wang
  - Le Cong
  - Shenghua Gao
  - Xiangru Tang
links:
  Paper: https://arxiv.org/abs/2602.07075
  Code: https://github.com/xinwuye/LatentChem
# abstract: >-
#   Chemical large language models (LLMs) predominantly rely on explicit Chain-of-Thought (CoT)
#   in natural language to perform complex reasoning. However, chemical reasoning is inherently
#   continuous and structural, and forcing it into discrete linguistic tokens introduces a fundamental
#   representation mismatch that constrains both efficiency and performance. We introduce LatentChem,
#   a latent reasoning interface that decouples chemical computation from textual generation, enabling
#   models to perform multi-step reasoning directly in continuous latent space while emitting language
#   only for final outputs. Remarkably, we observe a consistent emergent behavior: when optimized
#   solely for task success, models spontaneously internalize reasoning, progressively abandoning
#   verbose textual derivations in favor of implicit latent computation. This shift is not merely stylistic
#   but computationally advantageous. Across diverse chemical reasoning benchmarks, LatentChem
#   achieves a 59.88% non-tie win rate over strong CoT-based baselines on ChemCoTBench, while
#   delivering a 10.84× average inference speedup. Our results provide empirical evidence that chemical
#   reasoning is more naturally and effectively realized as continuous latent dynamics rather than
#   discretized linguistic trajectories.
---
