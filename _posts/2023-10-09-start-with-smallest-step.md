---
layout: post
title: Start with the smallest step!
subtitle: Stories and learning I get from learning TDD using Jest with Typescript
date: 2023-10-09
last-update: 2023-10-19
last-update-notes: fix typos.
categories: blog
---

Last week I spent a day learning how to do TDD using Jest and Typescript. During this I created a program called **[Sumer](https://github.com/frirasyidi/sumer)**---a program that can sum values in `numbers`, `arrays`, and `objects` simultaneously.

Here's my learning and the stories behind them from the exercise.

- [Story 1: _Don't over-engineer_](#story-1-dont-over-engineer)
- [Story 2: _Work on the goal right away_](#story-2-work-on-the-goal-right-away)
- [Story 3: _Start from the simplest working solution_](#story-3-start-from-the-simplest-working-solution)
- [Story 4: _No need to over-analyze the future_](#story-4-no-need-to-over-analyze-the-future)
- [Story 5: _Refactor strictly for ease _of maintenance, not future improvement__](#story-5-refactor-strictly-for-ease-of-maintenance-not-future-improvement)
- [Story 6: _Tests help you manage complexity_](#story-6-tests-help-you-manage-complexity)
- [Story 7: _Commit often_](#story-7-commit-often)
- [Concluding thoughts](#concluding-thoughts)

## Story 1: _Don't over-engineer_

I always love to prepare ahead to make sure that I can minimize problems that might happen in the future. So I was always on the lookout for "best practice" or "best setup" just so that my experience as a beginner learning Typescript is smooth sailing.

I then stumbled upon ["The TSConfig Cheat Sheet" by Matt Pocock](https://www.totaltypescript.com/tsconfig-cheat-sheet), a "_configuration options you need to care about_". Since I know nothing and I can see that he is a veteran, I decided to adopt the configuration.

At the start of the project, this decision ended up making a huge trouble for me. Simply configuring Jest and importing and exporting functions become incredibly difficult. The 'Problem' tab in my VSCode keeps shouting at the code I use and I end up spending almost half of the day looking up what went wrong---and even today, I was not able to understand what was going on!

Let's be clear, I am not saying Matt's config sucks. I just don't have the level of understanding that he has to make the config work. I am simply copying what he uses without the understanding of it. Sure, maybe one day I can make it work, but for now they are just noises that hinder me from reaching the goal.

## Story 2: _Work on the goal right away_

I have read [Jest and Typescript installation documentation](https://jestjs.io/docs/getting-started#using-typescript). The documentation provides multiple ways to install it. As I am not sure which works best, I decided to find some opinions online. That's when I stumbled upon [Kevin C. Dodds' "Run TypeScript type-checking with Jest" YouTube video](https://www.youtube.com/watch?v=6oHy58OOQkA&pp=ygUTamVzdCBmb3IgdHlwZXNjcmlwdA%3D%3D)---a recording of his live streaming showing his attempt on TDD with Jest with Typescript. The video has 18K viewers and he is an experienced developer.

So I decided to watch the video and parroting whatever he did in the video.

In the video, he mentioned that he had just decided to commit to using Typescript after enjoying the benefits of using it for some time. He also said that has had the chance to talk with some other experienced Typescript developers on the best practices and walk us through those setup recommendations. He guides us through the configuration and recommendations and...

...he failed. Again and again.
The video ends with him being unable to install Jest in Typescript at all.

Lesson learned: even an experienced developer fails from time to time---and the reason he failed is exactly because of the same mistake I made!

He (_and I, _obviously_) focus too much on the configuration rather than tackling the goal right away---simply running Jest on Typescript.

## Story 3: _Start from the simplest working solution_

Of course, both lessons from [Story 1](#story-1-dont-over-engineer) and [Story 2](#story-2-work-on-the-goal-right-away) are results of retrospection, so at the time, I was still trying to install Jest with Typescript. I then saw this Medium article ["Jest with Typescript" by Anthony Ng](https://medium.com/swlh/jest-with-typescript-446ea996cc68).

His steps were extremely simple:

1. Install Typescript, Jest, and Jest's typescript helpers
2. Generate the default configuration for Typescript and Jest
3. Run Jest.

It works like a charm!

These steps ask for nothing more and nothing less than setting up as minimally as you need and diving right into the necessary code. And **that** is what makes this one successful!

I realize that this is also the embodiment of the TDD principle itself: _Do minimal work required to make it pass_. Once it works, _then and only then_ you are okay to change stuff for the better (read: _refactor_).

## Story 4: _No need to over-analyze the future_

Every time I see videos of TDD, I always thought that there's always a redundant part in the first check return test.

```ts
// sumer.test.ts
describe("sumer will add values in the same index for two arrays", {
  it("should return the total of the two numbers", {
    const result = sumer([1,2],[1,2]);
    expect(result).toBe([2,4]);
  })
});

// sumer.ts
function sumer(a:number[], b:number[]): number[] {
  return [2,4]
}
```

The code above looks silly as it somehow does not need to be done like that at all, I can just make the function work from the first time already such as below:

```ts
// sumer.test.ts
describe("sumer will add values in the same index for two arrays", {
  it("should return the total of the two numbers", {
    const result = sumer([1,2],[1,2]);
    expect(result).toBe([2,4]);
  })
});

// sumer.ts
function sumer(a:number[], b:number[]): number[] {
  if (!b) return [2,4]

  let i = 0;
  b.forEach((each) => {
    a[i] += each
    i++
  })
  return a
}
```

But doing that multiple times during the session changed my mind. Now I am fond of the step.

As you can see from the stories above, I tend to overthink about what will happen in the future and will most likely end up over-engineering my code.

By doing the ridiculous step I allow myself to properly face the issue at hand and that issue only. I also gave room for my second test to help me shape the code later. Once I do this, I can see that it resulted in a simpler code, fits my tests better, and best of all, I don't spend time nor effort doing wasteful work.

To illustrate, Take a look at this example where the second test is as such:

```ts
// sumer.test.ts
describe("sumer will add values in the same index for two arrays", {
  it("should return the total of the two numbers", {
    const result = sumer([1,2],[1,2]);
    expect(result).toBe([2,4]);
  })

  it("should sum same-indexed value if lots of arrays are given", {
    const result = sumer([1,2],[2,3,4],[5,6,7,8]);
    expect(result).toBe([8,11,11,8]);
  })
});
```

If I used the non-silly starting code, I would need to delete a significant amount of code to fix the implementation I did before to make the code work like below. That is wasteful.

```ts
// sumer.ts
function sumer(...numbers: number[][]): number[] {
  let result = [];

  numbers.forEach((number) => {
    let i = 0;

    for (let i = 0; i < number.length; i++) {
      if (result[i]) {
        result[i] += number[i];
      } else {
        result[i] = number[i];
      }
    }
  });

  return result;
}
```

## Story 5: _Refactor strictly for ease _of maintenance, not future improvement__

The program I made, [Sumer](https://github.com/frirasyidi/sumer), is supposed to be a single function that can handle any given number of `numbers`, `arrays`, `objects`, or combinations of them.

I was just done making the code able to handle `numbers`, `arrays`, and both. Next, I need to make it able to handle `objects`. But before adding that capability, I need to do some refactoring.

During the refactoring, I got an idea of a way to make it easier for me to handle `objects` later by introducing a helper function that can tell me if I have some `arrays` or `objects`. That helper will inform the program of the right logic to use.

So I decided to make the helper. As the function is only able to handle `array` for now, I only make the `array` helper---I don't want to get ahead of myself. Once the helper is done, I plug it into the code as part of the Sumer refactor.

I then move on to work on Sumer's ability to handle objects.

My first test for handling `objects` requires me to update the function and somehow, the solution does not require the helper code. So I put it aside but keep it around since I know that I will want to use it in the later stage---when the test is more complex.

So I moved on to the next test case; I still didn't need it. The next; still didn't need it. The next; still nope. Up until I had completed all the test cases for handling `objects` and all other types together; I still didn't need it.

Amused, I ended up deleting the helper code. My learning is that refactoring should only be done for the sake of maintenance.

## Story 6: _Tests help you manage complexity_

At one point just before I finished the work, I cleverly thought that if I turn `numbers`, `arrays`, and `objects` into an object, I could just use one single method to sum their values.

As I worked on the approach, I broke almost all of the tests except for the last one I wrote---and I was so sure that I made the right code!

Here's one of the issues that broke some of the `array` addition tests; can you see where the issue is?

```ts
// objectify.ts
function objectify(item: number | number[] | { [key: string]: number }): {
  [key: string]: number;
} {
  if (typeof item === "number") return { "0": item };

  if (Array.isArray(item)) {
    let object: { [key: string]: number } = {};

    item.forEach((number) => {
      object[item.indexOf(number)] = number;
    });

    return object;
  }

  return item;
}
```

Yes, I was trying to be smart by using the `item.indexOf(item)`. This means, that if I have an array of `[1,2,1,2]`, the `objectify()` function will return `{ "0":1, "1":2 }` instead of `{ "0":1, "1":2, "2":1, "3":2 }` because `Array.indexOf()` will return only the index of the first value that matches the condition.

So the code above should be like this:

```ts
// objectify.ts
function objectify(item: number | number[] | { [key: string]: number }): {
  [key: string]: number;
} {
  if (typeof item === "number") return { "0": item };
  if (Array.isArray(item)) {
    let object: { [key: string]: number } = {};

    let i = 0;
    item.forEach((number) => {
      object[`${i}`] = number;
      i++;
    });

    return object;
  }

  return item;
}
```

Lucky for me, I had all the tests ready and I knew that it was an issue. Otherwise, I would have shipped an embarrassingly buggy code.

Once I fixed it and I am sure that all tests passed, I know that I shipped a correct and working code.

## Story 7: _Commit often_

Before starting the project, I wrote a simple specification as well as pledges to be done during the project (which you can find in the project's Readme).

One of the pledges is that I will commit after I complete every TDD cycle. And that pledge saved me from a lot of trouble.

There were times where I didn't know what I was doing and started breaking stuff up. Sometimes it was too messed up that I could not get away with undoing. The commits are the ones that allow me to go back to a stable state with no problem.

I am truly glad that I made lots of small commits.

## Concluding thoughts

This exercise taught me:

- to start small and make the problem simpler to solve,
- jump right on the problem instead of around it,
- always remember what needs to be true and check it from time to time,
- make a checkpoint so that it's easy for you to go back if you screw up, and
- that you don't need to solve all problems at once.

I mainly work as a UX Designer for the majority of my career. As a UX Designer, I have this urge to make sure that all the nitty-gritty details, irks, and probable issues that might appear are covered. That leads me to this mentality of feeling the need to overthink and this reminds me that [great experience requires iteration and cannot be baked from the start](/blog/2021/01/25/great-ux-can-be-designed-baked-from-the-start-nope). That all problems should be solved incrementally.

If you'd also like to, feel free and go check [the **Sumer** code on my Github](https://github.com/frirasyidi/sumer).
