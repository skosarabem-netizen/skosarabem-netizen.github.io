// Groups a case study into chapters: every `## Heading` starts a <section class="chapter">
// whose title sits in a sticky left column while the rest of the chapter scrolls on the right.
const el = (tagName, className, children = []) => ({ type: 'element', tagName, properties: { className: [className] }, children });

export default function rehypeChapters() {
  return tree => {
    const out = [];
    let body = null, n = 0;
    const isEmpty = b => b.children.every(c => c.type === 'text' && !c.value.trim());
    for (const node of tree.children) {
      if (node.type === 'element' && node.tagName === 'h2' && body && isEmpty(body)) {
        // two headings in a row: the second one becomes a sub-heading of the first chapter
        body.children.push({ ...node, tagName: 'h3' });
      } else if (node.type === 'element' && node.tagName === 'h2') {
        n += 1;
        const num = el('p', 'chapter-num', [{ type: 'text', value: `№ ${String(n).padStart(2, '0')}` }]);
        body = el('div', 'chapter-body');
        out.push(el('section', 'chapter', [el('div', 'chapter-head', [num, node]), body]));
      } else if (body) {
        body.children.push(node);
      } else {
        out.push(node);
      }
    }
    tree.children = out;
  };
}
