export type Mods = Record<string, boolean | string | undefined>;

export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

//! По итогу получаем
// classNames('remove-btn', {hovered: true, selectable: false}, ['png])
//!
// classNames('app', { hovered: true, test: false }, [theme, 'cls2', 'cls3']);
