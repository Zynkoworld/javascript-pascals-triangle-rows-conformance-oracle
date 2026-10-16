# zynko-oracle · `javascript-pascals-triangle-rows-conformance-oracle`

**A deterministic, re-checkable conformance oracle for `pascals-triangle` (javascript).**

## Proven
Measured on the canonical Exercism corpus — **8 input/output pairs, 8 distinct outputs** — produced by *running* the reference in a sealed sandbox, not asserted.

## Scope (declared)
The corpus is the canonical Exercism test data for `pascals-triangle`. Inputs outside that set are **not covered**; this oracle decides agreement on the published corpus only and makes no claim of general correctness.

## Provenance
Reference: the Exercism reference solution for `pascals-triangle` (javascript; MIT, Exercism), body unchanged. Proven by the exercism testsuite (pin=a31cd66091c467b0), re-executed by harvest in a sealed sandbox (unshare -rn) before this bundle was generated.

## License
Apache-2.0 for the scaffolding; the reference body retains its upstream MIT (Exercism) license.
