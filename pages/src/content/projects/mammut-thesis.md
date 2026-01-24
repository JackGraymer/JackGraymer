---
title: "THE PHYSICS OF CLIMBING SAFETY"
order: 25
company: "Mammut Sports Group"
brandLogo: "../assets/Mammut-Logo.png"
description: "A Master's Thesis investigating the mechanical trade-offs of Aramid-reinforced ropes through laboratory testing, statistical inference, and machine learning."
publishDate: 2026-16-01
category: "Data Science & Research"
tags: ["Python", "Quarto", "Machine Learning", "Statistical Inference", "Mechanical Testing", "Predictive Modeling", "GEE", "SHAP"]
thumbnail: "../assets/rope.png"
banner: "../assets/mammut-banner1.jpg"
gallery:
  - "../assets/drop tower.png"
  - "../assets/thesis1.png"
  - "../assets/thesis2.png"
  - "../assets/edelrid cut resistance.jpg"
---

## Research Overview

Developed in collaboration with **Mammut Sports Group AG** and the **Lucerne University of Applied Sciences and Arts**, this Master's Thesis explored the cutting edge of textile engineering. The research focused on **Aramid-reinforced hybrid ropes**, a revolutionary technology designed to prevent the most catastrophic failure in climbing: rope severance over sharp rock edges.

The project bridged the gap between physical laboratory experiments and digital predictive science, using data to quantify exactly how Aramid fibers change the "safety profile" of a climber's most critical lifeline.

## The High-Stakes Problem: Sharp Edge Failure

Standard climbing ropes are made of Polyamide (Nylon), which provides a "soft catch" but is vulnerable to shear forces. While integrated Aramid (the material in bulletproof vests) can stop a blade, its extreme stiffness raises concerns:
*   **The Shock Load:** Does it transmit too much force to the climber?
*   **The Aging Factor:** Do the coarse aramid fibers wear the soft nylon core from the inside during repeated use?
*   **The Conditional Advantage:** How does the Aramid fibers improve the rope cut resistance under different angles and tension?

## Methodology: From Drop Towers to Algorithms

The research utilized a three-pillar methodology to dissect rope behavior across nine distinct models and hundreds of controlled tests.

### 1. Laboratory Stress Testing
Conducted high-precision experiments on the **Mammut Drop Tower** and proprietary **Edelrid Cut-Resistance machines**:
*   **Single Drop Tests:** Measuring peak impact force and dynamic elongation.
*   **Endurance Cycling:** 30 repeated drops per specimen to measure mechanical aging.
*   **Sharpe Edge Simulation:** Testing severance under variable blade angles (120° vs 160°) and extreme static loads (up to 300kg).

### 2. Statistical Inference (GEE)
Leveraged **Generalized Estimating Equations (GEE)** with **Cluster Wild Bootstrap** to account for dependencies within rope models and manufacturing batches. This ensured that findings were statistically valid despite the complex, hierarchical nature of the datasets.

### 3. Predictive Modeling (Machine Learning)
Built and benchmarked regression architectures to predict dynamic performance:
*   **Linear Baselines:** Elastic Net for feature selection.
*   **Ensemble Methods:** Gradient Boosting for non-linear threshold identification.
*   **Neural Networks (MLP):** Modeled the continuous physics of polymer stretching, achieving **>97% accuracy** in predicting peak impact forces.

## Key Insights & Results

The research provided a definitive, data-backed answer to the viability of hybrid rope technology:

### The “Hard Catch” Trade-off
Aramid-reinforced ropes are notably stiffer than polyamide controls, producing **higher peak arrest forces and lower dynamic stretch**. They stay within certification limits but deliver a firmer catch that loads the protection chain more aggressively.

### Conditional Superiority in Cut Resistance
Under moderate edge angles and loads, aramid constructions hold a **clear advantage in resisting sharp-edge failures**. Once angles tighten and tension rises, that lead rapidly narrows, indicating extreme geometries can negate the material benefit.

### Parallel Degradation
Across thirty-drop endurance sequences, both constructions stiffened at essentially the same rate. No evidence surfaced of accelerated internal abrasion in the hybrid build, **supporting parallel aging behavior**.

### Virtual Prototyping
Machine-learning surrogates reproduced the main laboratory trends well enough to vet new designs digitally, **pointing to shorter R&D loops with fewer physical prototypes**.

## Impact

This thesis provided **Mammut** with the empirical evidence needed to position their "Core Protect" technology in the alpine market. It defined the "safe operating envelope" for cut-resistant ropes and demonstrated how data science can accelerate material innovation in the sports equipment industry.