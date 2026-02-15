// script.js - navigation & interactions

document.addEventListener('DOMContentLoaded', function() {
    // ===== navigation simulation =====
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const text = this.innerText.trim().toLowerCase();
            // map bottom nav to pages
            if (text.includes('home')) window.location.href = 'dashboard.html';
            else if (text.includes('history')) window.location.href = 'history.html';
            else if (text.includes('analytics')) window.location.href = 'analytics.html';
            else if (text.includes('settings')) window.location.href = 'settings.html';
        });
    });

    // ===== login buttons =====
    const loginBtns = document.querySelectorAll('.btn-login');
    loginBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // fade out effect then redirect
            document.body.style.opacity = '0.7';
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 200);
        });
    });

    // ===== payment flow: approve -> processing -> success =====
    const approveBtn = document.querySelector('.btn-approve');
    if (approveBtn) {
        approveBtn.addEventListener('click', function() {
            window.location.href = 'processing.html';
        });
    }

    // reject -> cancel
    const rejectBtn = document.querySelector('.btn-reject');
    if (rejectBtn) {
        rejectBtn.addEventListener('click', function() {
            window.location.href = 'cancel.html';
        });
    }

    // cancel payment (warning page)
    const cancelPaymentBtn = document.querySelector('.btn-cancel-payment');
    if (cancelPaymentBtn) {
        cancelPaymentBtn.addEventListener('click', function() {
            window.location.href = 'cancel.html';
        });
    }

    // proceed anyway (from warning) -> processing
    const proceedAnyway = document.querySelector('.btn-proceed-anyway');
    if (proceedAnyway) {
        proceedAnyway.addEventListener('click', function() {
            window.location.href = 'processing.html';
        });
    }

    // return to dashboard links
    const dashboardBtns = document.querySelectorAll('.btn-dashboard');
    dashboardBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });
    });

    // ===== auto redirect from processing to success after 2.5s =====
    if (window.location.pathname.includes('processing.html')) {
        let progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            let width = 10;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    window.location.href = 'success.html';
                } else {
                    width += 5;
                    progressBar.style.width = width + '%';
                }
            }, 120);
        } else {
            // fallback
            setTimeout(() => {
                window.location.href = 'success.html';
            }, 2000);
        }
    }

    // ===== AI shield toggle (settings) =====
    const aiToggle = document.getElementById('aiToggle');
    if (aiToggle) {
        aiToggle.addEventListener('change', function() {
            const status = this.checked ? 'enabled' : 'disabled';
            alert(`AI Shield ${status} (simulated)`);
        });
    }

    // ===== click effects (glow) =====
    const allClickable = document.querySelectorAll('button, .nav-item, .chip');
    allClickable.forEach(el => {
        el.addEventListener('mousedown', () => el.style.transform = 'scale(0.97)');
        el.addEventListener('mouseup', () => el.style.transform = 'scale(1)');
        el.addEventListener('mouseleave', () => el.style.transform = 'scale(1)');
    });

    // ===== filter chips highlight (history) =====
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            chips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ===== fake data population (analytics counters) =====
    const protectedSpan = document.getElementById('totalProtected');
    if (protectedSpan) protectedSpan.innerText = '₹2,33,450';
    const threatsSpan = document.getElementById('threatsBlocked');
    if (threatsSpan) threatsSpan.innerText = '24';
    const safeSpan = document.getElementById('safeTxns');
    if (safeSpan) safeSpan.innerText = '1,028';

    // ===== download/share simulation =====
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => alert('Receipt downloaded (demo)'));
    }
    const shareBtn = document.querySelector('.btn-share');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => alert('Share simulated'));
    }
});


// Add this to your existing script.js

// Handle quick action buttons
document.addEventListener('DOMContentLoaded', function() {
    // Find all quick action cards by their icon/text content
    const quickActions = document.querySelectorAll('.glass-card');
    
    quickActions.forEach(card => {
        // Check if this is a quick action card (has icon and text)
        if (card.innerHTML.includes('Scan Link')) {
            card.addEventListener('click', function() {
                window.location.href = 'intercept.html';
            });
            card.style.cursor = 'pointer';
        }
        
        if (card.innerHTML.includes('Fraud Tips')) {
            card.addEventListener('click', function() {
                window.location.href = 'fraud-tips.html';
            });
            card.style.cursor = 'pointer';
        }
        
        if (card.innerHTML.includes('Report Fraud')) {
            card.addEventListener('click', function() {
                window.location.href = 'report-fraud.html';
            });
            card.style.cursor = 'pointer';
        }
    });
    
    // Make recent activity items clickable
    const activityItems = document.querySelectorAll('.glass-card.flex.space-between.mb-2');
    activityItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Check if it's the high risk item (Unknown Sender)
            if (this.innerHTML.includes('Unknown Sender')) {
                window.location.href = 'warning.html';
            } else {
                window.location.href = 'intercept.html';
            }
        });
        item.style.cursor = 'pointer';
    });
});