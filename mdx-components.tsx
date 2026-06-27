import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-serif text-4xl font-semibold leading-tight text-ink">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 font-serif text-3xl font-semibold leading-tight text-ink">{children}</h2>
    ),
    p: ({ children }) => <p className="mt-5 leading-8 text-ink/75">{children}</p>,
    a: ({ children, href }) => (
      <a className="font-semibold text-moss-700 underline-offset-4 hover:underline" href={href}>
        {children}
      </a>
    ),
    ...components
  };
}
