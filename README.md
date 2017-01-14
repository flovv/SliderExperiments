# Experiments with Slider-based Interfaces
A set of interfaces to elicit confidence intervals from users. 

All interfaces are based on the same set of elements.
They differ in the degrees of freedom they facilitate.
For example; Slider 3 allows the user to set three different points; low, high and midpoint.
Slider 6 allows to set the same points (low, high, mid), but also allows to manipulate the 3 points on the y-axis resulting in 6 degrees of freedom.

## Demos
Slider 1: 
[Demo](https://htmlpreview.github.io/?https://raw.githubusercontent.com/flovv/SliderExperiments/master/1Step/simpleSlider.html)

Slider 2:
[Demo](https://htmlpreview.github.io/?https://raw.githubusercontent.com/flovv/SliderExperiments/master/2stepTri/2StepTri.html)

Slider 3:
[Demo](https://htmlpreview.github.io/?https://raw.githubusercontent.com/flovv/SliderExperiments/master/3stepTri/3StepTri.html)

Slider 4:
[Demo](https://htmlpreview.github.io/?https://raw.githubusercontent.com/flovv/SliderExperiments/master/3stepTri%2BxDegrees/Gold-Roth-Tec.html)

Slider 5:
[Demo](https://htmlpreview.github.io/?https://raw.githubusercontent.com/flovv/SliderExperiments/master/3stepTri%2BxDegrees/Gold-Roth-Tec.html?dof=5)

Slider 6:
[Demo](https://htmlpreview.github.io/?https://raw.githubusercontent.com/flovv/SliderExperiments/master/3stepTri%2BxDegrees/Gold-Roth-Tec.html?dof=6)


Slider 4 to Slider 6 have the same base code, the number of points which can be manipulated in the y-direction is handed over by the parameter ("dof").

## Screenshots
![example1](https://github.com/flovv/SliderExperiments/blob/master/docs/example1.jpg "Example for Slider 1 - Slider 3)

![example2](https://github.com/flovv/SliderExperiments/blob/master/docs/example2.jpg "Example for Slider 4 and Slider 6)

## Background
Elicitation of probability distributions from laypeople is a challenging problem;

* laypeople rarely think in distributions.
* if they are forced to, they are usually overconfident in their estimates (distributions tend to be too narrow).
* there is limited research on how to structures UX interfaces to facilitate elicitation.

The interfaces above build on some established practices:

* they change the question to focus on distribution.
* they work step by step, trying to avoid ankering.
* they represent the distribution and changes to it in real-time.
