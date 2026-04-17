# I18N Coverage

## Translated pages

- Login: `packages/views/auth/login-page.tsx`
- Workspace creation: `packages/views/workspace/new-workspace-page.tsx`, `packages/views/workspace/create-workspace-form.tsx`
- Issues: `packages/views/issues/components/issues-page.tsx`, `packages/views/issues/components/issues-header.tsx`, `packages/views/issues/components/batch-action-toolbar.tsx`
- Agents: `packages/views/agents/components/agents-page.tsx`, `packages/views/agents/components/create-agent-dialog.tsx`, `packages/views/agents/components/agent-detail.tsx`
- Settings navigation: `packages/views/settings/components/settings-page.tsx`
- Inbox: `packages/views/inbox/components/inbox-page.tsx`, `packages/views/inbox/components/inbox-list-item.tsx`
- My Issues: `packages/views/my-issues/components/my-issues-page.tsx`, `packages/views/my-issues/components/my-issues-header.tsx`
- Runtimes shell: `packages/views/runtimes/components/runtimes-page.tsx`, `packages/views/runtimes/components/runtime-list.tsx`
- Shared UI strings: `packages/ui/components/ui/dialog.tsx`, `packages/ui/components/common/quick-emoji-picker.tsx`, `packages/ui/components/ui/spinner.tsx`

## Untranslated pages

- Landing marketing pages under `apps/web/features/landing/*`
  Reason: they still use a separate pre-existing locale context and were out of scope for this shared `next-intl` migration.
- Deep issue detail/editor flows under `packages/views/issues/components/issue-detail.tsx` and comment/editor subcomponents
  Reason: high string volume and several labels come from shared config or activity-formatting paths that need a broader follow-up pass.
- Settings detail tabs such as `account-tab.tsx`, `members-tab.tsx`, `workspace-tab.tsx`, `repositories-tab.tsx`
  Reason: the main settings shell is localized, but the tab internals still contain substantial English copy and confirm-dialog text.
- Agent sub-tabs such as `settings-tab.tsx`, `instructions-tab.tsx`, `skills-tab.tsx`, `tasks-tab.tsx`, `env-tab.tsx`, `custom-args-tab.tsx`
  Reason: this pass prioritized page-level coverage first; these tabs need a dedicated follow-up to keep key naming coherent.

## Known limitations

- Desktop currently falls back to English defaults from shared helper hooks when a `next-intl` provider is not present.
- Some labels still originate from immutable shared config in `packages/core/*` and therefore remain English in this branch.
- User-generated content, issue titles, comments, runtime names, and workspace names are not translated.
- A few count strings use simple placeholder substitution in the shared fallback helpers instead of full ICU plural rules.
- Locale switching is cookie/query driven for now; locale-prefixed routes were not introduced because they would collide with top-level workspace slug routing.
