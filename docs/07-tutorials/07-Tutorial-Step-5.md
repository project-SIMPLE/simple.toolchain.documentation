---
sidebar_position: 7
title: "Step 5: Dynamic Colors"
sidebar_label: "5. Dynamic Colors"
description: Use GAMA attributes to drive per-agent colors in Unity.
---

# Step 5: Dynamic Colors from GAMA Attributes

Static species settings are not always enough. Some visual properties should be driven
by values coming from GAMA.

Dynamic colors let Unity map an attribute value to a color at runtime. For example,
the `food` value of each `vegetation_cell` can produce a more or less intense green.

## Attribute Requirements

The GAMA model must send the attribute in `add_geometries_to_send(...)`.

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

## Continuous Colors

Use **Continuous** mode when an attribute is numeric and should produce a gradual
visual change.

In Unity:

1. Select the `Game Manager`.
2. In the Inspector, find the target species.
3. Open the **Dynamic Color** foldout.
4. Enable **Override Dynamic Color**.
5. Set **Dynamic Color Mode** to **Continuous**.
6. Set **Attribute Name** to the GAMA attribute, for example `food`.
7. Choose a **Base Color**.
8. Set **Min Value** and **Max Value** to the expected GAMA range.
9. Adjust light and dark variation until the contrast is readable.

Use **Invert** if the gradient reads backwards for the meaning of the attribute.

## Discrete Colors

Use **Discrete** mode when an attribute represents a small set of states.

Example:

```text
state = contaminated -> red
state = recovered    -> green
state = dead         -> black
```

## Runtime Behavior

Dynamic colors are applied per agent when Unity receives GAMA attributes.

They do not replace the static preview workflow:

- the preview defines the default species representation;
- dynamic rules define how individual agents change from their own attributes;
- if the attribute is missing or cannot be parsed, Unity keeps the static or GAMA
  color instead of crashing.

## Result

At the end of this tutorial, Unity can show both static species settings and per-agent
attribute variations while the GAMA simulation runs.
