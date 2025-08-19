import os

src_dir = "src"
summary_path = os.path.join(src_dir, "SUMMARY.md")

with open(summary_path, "w", encoding="utf-8") as f:
    f.write("# Summary\n\n")

    for root, dirs, files in os.walk(src_dir):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ["book"]]
        md_files = [fn for fn in files if fn.endswith(".md") and fn != "SUMMARY.md"]

        rel_root = os.path.relpath(root, src_dir)
        for fn in sorted(md_files):
            rel_path = os.path.normpath(os.path.join(rel_root, fn))
            indent = "  " * (rel_root.count(os.sep))
            title = os.path.splitext(fn)[0]
            f.write(f"{indent}* [{title}]({rel_path.replace(os.sep, '/')})\n")