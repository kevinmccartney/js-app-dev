$(document).ready(function() {
  const header = $('header');
  const sections = $('section');

  // console.log(header);
  // console.log(sections);

  const sectionWithCurrent = sections.filter(function(index, element) {
    return $(element).hasClass('current');
  });

  console.log(sectionWithCurrent);

  const sectionAfterCurrent = sectionWithCurrent.next();

  console.log(sectionAfterCurrent);

  const sectionBeforeCurrentTitle = sectionWithCurrent
    .prev()
    .children('h2');

    console.log(sectionBeforeCurrentTitle);

    const divParent = $('h2.highlight')
      .parent('section')
      .parent('div');

    console.log(divParent);

    const h2sInSections = $('section h2')
      .parent('section')
      .get();

    console.log(h2sInSections);

    const chainedSelector = $('body')
      .find('section')
      .find('h2');

    console.log(chainedSelector);

    const prevChainedSelector = chainedSelector.end();

    console.log(prevChainedSelector);
});
