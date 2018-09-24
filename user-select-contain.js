(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  // user-select: contain polyfill
  //
  // Marks element the container for triple click selections.
  //
  // Examples
  //
  //   <span class="user-select-contain">
  //     50ce349853
  //   </span>
  //

  function supportsUserSelectContain() {
    const el = document.createElement('div');
    el.style.cssText = '-ms-user-select: element; user-select: contain;';
    return (
      el.style.getPropertyValue('-ms-user-select') === 'element' ||
      el.style.getPropertyValue('-ms-user-select') === 'contain' ||
      el.style.getPropertyValue('user-select') === 'contain'
    )
  }

  // Skip polyfill if theres native support, or if Selection APIs are not supported
  if (window.getSelection && !supportsUserSelectContain()) {
    document.addEventListener('click', function(event) {
      if (!(event.target instanceof Element)) return

      const currentTarget = event.target.closest('.user-select-contain');
      if (!currentTarget) return

      const selection = window.getSelection();
      if (!selection.rangeCount) return

      const container = selection.getRangeAt(0).commonAncestorContainer;
      if (currentTarget.contains(container)) return

      selection.selectAllChildren(currentTarget);
    });
  }

})));
