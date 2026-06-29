---
sidebar_position: 14
title: Dynamic Colors
description: Use GAMA attributes to drive per-agent colors in Unity.
---

# Dynamic Colors from GAMA Attributes

Static species colors are useful, but some visual states should depend on values sent
by GAMA for each agent.

Dynamic colors let Unity map an attribute value to a color at runtime. For example,
the `food` value of each `vegetation_cell` can produce a lighter or darker green.

## 1. Send Attributes from GAMA

The GAMA model must send the attribute with the geometries sent to Unity.

Example boolean attribute:

```gaml
list<bool> people_infected <- people collect each.is_infected;
map<string, list<bool>> people_atts <- ["is_infected":: people_infected];

do add_geometries_to_send(people, up_people, people_atts);
```

Example numeric attribute:

```gaml
list<float> prey_energy <- prey collect each.energy;
map<string, list<float>> prey_atts <- ["energy":: prey_energy];

do add_geometries_to_send(prey, up_prey, prey_atts);
```

The attribute list must stay aligned with the agent list sent to Unity.

## 2. Configure a Continuous Dynamic Color

Use **Continuous** mode when an attribute is numeric and should produce a gradual
visual change.

In Unity:

1. Generate a preview from **GAMA > GAMA Panel**.
2. Select `Game Manager`.
3. In the Inspector, find the target species.
4. Open the **Dynamic Color** foldout.
5. Enable **Override Dynamic Color**.
6. Set **Dynamic Color Mode** to **Continuous**.
7. Set **Attribute Name** to the GAMA attribute, for example `food`.
8. Choose a **Base Color**.
9. Set **Min Value** and **Max Value** to the expected GAMA range.
10. Adjust light and dark amounts until the contrast is readable.

Example mapping:

```text
low food  -> lighter or darker green
high food -> stronger green
```

Use **Invert** if the gradient reads backwards for the meaning of the attribute.

## 3. Configure Discrete Colors

Use **Discrete** mode when an attribute represents a small set of states.

Examples:

```text
state = contaminated -> red
state = recovered    -> green
state = dead         -> black
```

This is useful for states such as infection status, opinions, roles, or categories.

## Runtime Behavior

Dynamic colors are applied per agent when Unity receives GAMA attributes.

They complement the static preview workflow:

- the preview defines the default species representation;
- dynamic rules define per-agent visual variations;
- if the attribute is missing or cannot be parsed, Unity keeps the static or GAMA color
  instead of crashing.

## Result

After configuration, Unity can display both stable species settings and per-agent
attribute variations while the GAMA simulation runs.
